Telescope_Settings = new Meteor.Collection('telescopeSettings');

Telescope_Settings.allow({
  insert: isAdminById
, update: isAdminById
, remove: isAdminById
});

