
Meteor.startup(function () {
  var scoreInterval = getSetting("scoreUpdateInterval") || 30;
  if(scoreInterval>0){

    // active items get updated every N seconds
    intervalId=Meteor.setInterval(function () {
      var updatedPosts = 0;
      var updatedComments = 0;
      // console.log('tick ('+scoreInterval+')');
      Telescope_Posts.find({'inactive': {$ne : true}}).forEach(function (post) {
        updatedPosts += updateScore({collection: Telescope_Posts, item: post});
      });
      Telescope_Comments.find({'inactive': {$ne : true}}).forEach(function (comment) {
        updatedComments += updateScore({collection: Telescope_Comments, item: comment});
      });
      // console.log("Updated "+updatedPosts+"/"+Posts.find().count()+" Posts")
    }, scoreInterval * 1000);

    // inactive items get updated every hour
    inactiveIntervalId=Meteor.setInterval(function () {
      var updatedPosts = 0;
      var updatedComments = 0;
      Telescope_Posts.find({'inactive': true}).forEach(function (post) {
        updatedPosts += updateScore({collection: Telescope_Posts, item: post});
      });
      Telescope_Comments.find({'inactive': true}).forEach(function (comment) {
        updatedComments += updateScore({collection: Telescope_Comments, item: comment});
      });
    }, 3600 * 1000);

  }
});
