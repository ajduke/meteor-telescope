Template.telescope_comment_page.helpers({
  post: function () {
    return Telescope_Posts.findOne(this.comment.post);
  }
});