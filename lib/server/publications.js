var privacyOptions = { // false means private
  secret_id: false,
  isAdmin: false,
  emails: false,
  notifications: false,
  inviteCount: false,
  'profile.email': false,
  'services.twitter.accessToken': false,
  'services.twitter.accessTokenSecret': false,
  'services.twitter.id': false,
  'services.password': false,
  'services.resume': false
};

// -------------------------------------------- Users -------------------------------------------- //

// Publish the current user

Meteor.publish('currentUser', function() {
  var user = Meteor.users.find({_id: this.userId});
  this.ready();
  return user;
});


// Publish a single user

Meteor.publish('telescopeSingleUser', function(userIdOrSlug) {
  if(canViewById(this.userId)){
    var options = isAdminById(this.userId) ? {limit: 1} : {limit: 1, fields: privacyOptions};
    var findById = Meteor.users.find(userIdOrSlug, options);
    var findBySlug = Meteor.users.find({slug: userIdOrSlug}, options)
    // if we find something when treating the argument as an ID, return that; else assume it's a slug
      this.ready();
    return findById.count() ? findById : findBySlug;
  }
    this.ready();
  return [];
});

// Publish authors of the current post and its comments

Meteor.publish('telescopePostUsers', function(postId) {
  if(canViewById(this.userId)){
    // publish post author and post commenters
    var post = Telescope_Posts.findOne(postId),
        users = [];
        
    if(post) {
      var comments = Telescope_Comments.find({post: post._id}).fetch();
      // get IDs from all commenters on the post, plus post author's ID
      users = _.pluck(comments, "userId");
      users.push(post.userId);
      users = _.unique(users);
    }
      this.ready();
    return Meteor.users.find({_id: {$in: users}}, {fields: privacyOptions});
  }
    this.ready();
  return [];
});

// Publish author of the current comment

Meteor.publish('telescopeCommentUser', function(commentId) {
  if(canViewById(this.userId)){
    var comment = Telescope_Comments.findOne(commentId);
      this.ready();
    return Meteor.users.find({_id: comment && comment.userId}, {fields: privacyOptions});
  }
    this.ready();
  return [];
});

// Publish all the users that have posted the currently displayed list of posts

Meteor.publish('telescopePostsListUsers', function(terms) {
  if(canViewById(this.userId)){
    var parameters = getParameters(terms),
        posts = Telescope_Posts.find(parameters.find, parameters.options),
        userIds = _.pluck(posts.fetch(), 'userId');
      this.ready();
    return Meteor.users.find({_id: {$in: userIds}}, {fields: privacyOptions, multi: true});
  }
    this.ready();
  return [];
});

// Publish all users

Meteor.publish('telescopeAllUsers', function(filterBy, sortBy, limit) {
  if(canViewById(this.userId)){
    var parameters = getUsersParameters(filterBy, sortBy, limit);
    if (!isAdminById(this.userId)) // if user is not admin, filter out sensitive info
      parameters.options = _.extend(parameters.options, {fields: privacyOptions});
      this.ready();
    return Meteor.users.find(parameters.find, parameters.options);  
  }
    this.ready();
  return [];
});

// publish all users for admins to make autocomplete work
// TODO: find a better way

Meteor.publish('telescopeAllUsersAdmin', function() {
  if (isAdminById(this.userId)) {
    this.ready();
    return Meteor.users.find();
  } else {
    this.ready();
    return [];
  }
});

// -------------------------------------------- Posts -------------------------------------------- //

// Publish a single post

Meteor.publish('telescopeSinglePost', function(id) {
  if(canViewById(this.userId)){
      this.ready();
    return Telescope_Posts.find(id);
  }
    this.ready();
  return [];
});

// Publish the post related to the current comment

Meteor.publish('telescopeCommentPost', function(commentId) {
  if(canViewById(this.userId)){
    var comment = Telescope_Comments.findOne(commentId);
      this.ready();
    return Telescope_Posts.find({_id: comment && comment.post});
  }
    this.ready();
  return [];
});

// Publish a list of posts

Meteor.publish('telescopePostsList', function(terms) {
  if(canViewById(this.userId)){
    var parameters = getParameters(terms),
        posts = Telescope_Posts.find(parameters.find, parameters.options);
    if(terms.query)
      logSearch(terms.query);
    this.ready();
    return posts;
  }
  this.ready();
  return [];
});

// -------------------------------------------- Comments -------------------------------------------- //

// Publish comments for a specific post

Meteor.publish('telescopePostComments', function(postId) {
  if(canViewById(this.userId)){
    this.ready();
    return Telescope_Comments.find({post: postId});
  }
  this.ready();
  return [];
});

// Publish a single comment

Meteor.publish('telescopeSingleComment', function(commentId) {
  if(canViewById(this.userId)){
    this.ready();
    return Telescope_Comments.find(commentId);
  }
  this.ready();
  return [];
});

// -------------------------------------------- Other -------------------------------------------- //

Meteor.publish('telescopeSettings', function() {
  var options = {};
  this.ready();
  return Telescope_Settings.find({}, options);
});

Meteor.publish('telescopeNotifications', function() {
  // only publish notifications belonging to the current user
  if(canViewById(this.userId)){
    this.ready();
    return Telescope_Notifications.find({userId:this.userId});
  }
  this.ready();
  return [];
});

Meteor.publish('telescopeCategories', function() {
  if(canViewById(this.userId)){
    this.ready();
    return Telescope_Categories.find();
  }
  this.ready();
  return [];
});

Meteor.publish('telescopeSearches', function(limit) {
  var limit = typeof limit === undefined ? 20 : limit;
  if(isAdminById(this.userId)){
    this.ready();
    return Telescope_Searches.find({}, {limit: limit, sort: {timestamp: -1}});
  }
  this.ready();
  return [];
});