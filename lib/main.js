
TelescopeConfig = {
  title:'Forum'
}

var constructor = function(property1) {
    this.property1 = property1; // or whatever in your constructor.
};

if (typeof Meteor === 'undefined') {
    // Export it node style
    TelescopeConfig = exports = module.exports = constructor; // Limit scope to this nodejs file
} else {
    // Export it meteor style
    TelescopeConfig = constructor; // Make it a global
    TelescopeConfig.title="Forum";

}

baseUrl= TelescopeConfig.siteUrl===undefined ? 'forum': TelescopeConfig.siteUrl;