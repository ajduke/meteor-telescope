Package.describe({
    summary: "Meteor package for Telescope Application"
});

Package.on_use(function (api) {
	// dependecies required by package
    api.use('jquery', 'client'); 
    api.use('bootstrap-3', 'client');
    
    // adding the required file for package
 	api.add_files('lib/telescope-integration/lib/main.js', 'client');
    api.add_files('lib/telescope-integration/lib/router.js', 'client');
    
});
