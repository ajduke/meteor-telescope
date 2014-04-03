if(Meteor.isClient){
  // Local (client-only) collection
  Telescope_Errors = new Meteor.Collection(null);
}
throwError = function(message, type){
  type = (typeof type === 'undefined') ? 'error': type;
  // Store errors in the 'Errors' local collection
  Telescope_Errors.insert({message:message, type:type, seen: false, show:true});
}
