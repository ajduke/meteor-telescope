Template.telescope_comment_reply.helpers({
  post: function () {
    return Telescope_Posts.findOne(this.comment.post);
  }
});