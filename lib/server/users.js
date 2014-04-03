TelescopeConfig.extend_accounts_create_user = function (options, user) {

  console.log(user)
  console.log(options)
  var userProperties = {
    profile: options.profile || {},
    karma: 0,
    isInvited: false,
    isAdmin: false,
    postCount: 0,
    commentCount: 0,
    invitedCount: 0
  }
  user = _.extend(user, userProperties);

  if (options.email)
    user.profile.email = options.email;

  if (getEmail(user))
    user.email_hash = getEmailHash(user);

  if (!user.profile.name)
    user.profile.name = user.username;

  // set notifications default preferences
  user.profile.notifications = {
    users: false,
    posts: false,
    comments: true,
    replies: true
  }

  // create slug from username
  user.slug = slugify(getUserName(user));

  // if this is the first user ever, make them an admin
  if (!Meteor.users.find().count())
    user.isAdmin = true;

  // give new users a few invites (default to 3)
  user.inviteCount = getSetting('startInvitesCount', 3);

  trackEvent('new user', {username: user.username, email: user.profile.email});

  // if user has already filled in their email, add them to MailChimp list

  // send notifications to admins
  var admins = Meteor.users.find({isAdmin: true});
  admins.forEach(function (admin) {
    if (getUserSetting('notifications.users', false, admin)) {
      var notification = getNotificationContents({
        event: 'newUser',
        properties: {
          username: getUserName(user),
          profileUrl: getProfileUrl(user)
        },
        userId: admin._id
      }, 'email');
      sendNotification(notification, admin);
    }
  });


  return user;
}

//Accounts.onCreateUser(function(options, user){
//  var userProperties = {
//    profile: options.profile || {},
//    karma: 0,
//    isInvited: false,
//    isAdmin: false,
//    postCount: 0,
//    commentCount: 0,
//    invitedCount: 0
//  }
//  user = _.extend(user, userProperties);
//
//  if (options.email)
//    user.profile.email = options.email;
//
//  if (getEmail(user))
//    user.email_hash = getEmailHash(user);
//
//  if (!user.profile.name)
//    user.profile.name = user.username;
//
//  // set notifications default preferences
//  user.profile.notifications = {
//    users: false,
//    posts: false,
//    comments: true,
//    replies: true
//  }
//
//  // create slug from username
//  user.slug = slugify(getUserName(user));
//
//  // if this is the first user ever, make them an admin
//  if (!Meteor.users.find().count() )
//    user.isAdmin = true;
//
//  // give new users a few invites (default to 3)
//  user.inviteCount = getSetting('startInvitesCount', 3);
//
//  trackEvent('new user', {username: user.username, email: user.profile.email});
//
//  // if user has already filled in their email, add them to MailChimp list
//  if(user.profile.email)
//    addToMailChimpList(user);
//
//  // send notifications to admins
//  var admins = Meteor.users.find({isAdmin: true});
//  admins.forEach(function(admin){
//    if(getUserSetting('notifications.users', false, admin)){
//      var notification = getNotificationContents({
//        event: 'newUser',
//        properties: {
//          username: getUserName(user),
//          profileUrl: getProfileUrl(user)
//        },
//        userId: admin._id
//      }, 'email');
//      sendNotification(notification, admin);
//    }
//  });
//
//
//  return user;
//});

getEmailHash = function (user) {
  // todo: add some kind of salt in here
  return CryptoJS.MD5(getEmail(user).trim().toLowerCase() + user.createdAt).toString();
}

Meteor.methods({
  changeEmail: function (newEmail) {
    Meteor.users.update(Meteor.userId(), {$set: {emails: [
      {address: newEmail}
    ]}});
  },
  numberOfPostsToday: function () {
    console.log(numberOfItemsInPast24Hours(Meteor.user(), Telescope_Posts));
  },
  numberOfCommentsToday: function () {
    console.log(numberOfItemsInPast24Hours(Meteor.user(), Telescope_Comments));
  },
  testEmail: function () {
  },
  testBuffer: function () {
    // TODO
  },
  getScoreDiff: function (id) {
    var object = Telescope_Posts.findOne(id);
    var baseScore = object.baseScore;
    var ageInHours = (new Date().getTime() - object.submitted) / (60 * 60 * 1000);
    var newScore = baseScore / Math.pow(ageInHours + 2, 1.3);
    return Math.abs(object.score - newScore);
  },
  setEmailHash: function (user) {
    var email_hash = CryptoJS.MD5(getEmail(user).trim().toLowerCase()).toString();
    Meteor.users.update(user._id, {$set: {email_hash: email_hash}});
  },
});