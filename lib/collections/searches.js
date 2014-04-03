Telescope_Searches = new Meteor.Collection('telescopeSearches');

Telescope_Searches.allow({
  update: isAdminById
, remove: isAdminById
});

