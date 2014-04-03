Template.telescope_category_item.events({
  'click .edit-link': function(e, instance){
    e.preventDefault();
    var categoryId = instance.data._id;
    var name = $('#name_'+categoryId).val();
    var slug = slugify(name);
    if(name){
      Telescope_Categories.update(categoryId,{ $set: {name: name, slug: slug}});
    }else{
      Telescope_Categories.remove(categoryId);
    }
    Meteor.call('updateCategoryInPosts', categoryId, function(error) {
      if (error) {
        throwError(error.reason);
      }
    });
    }
})