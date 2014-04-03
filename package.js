Package.describe({
  summary: "Meteor package for Telescope Application"
});


Package.on_use(function (api) {

    api.export('TelescopeConfig',['client','server']);

// dependecies required by package
    api.use(['templating'], 'client');
    api.use(['jquery',
        'backbone',
        'accounts-base',
        'accounts-password',
        'accounts-twitter',
        'spiderable',
        'crypto-md5',
        'momentjs',
        'standard-app-packages',
        'iron-router',
        'nprogress',
        'fast-render',
        'bootstrap-3',
        'fontawesome4'
    ], ['client', 'server']);
    api.add_files('lib/main.js', ['client','server']);
    // adding the required file for package
    api.add_files([
        'lib/events.js',
        'lib/helpers.js',
        'lib/parameters.js',
        'lib/router.js',
        'lib/users.js',
        'lib/deepExtend.js',
        'lib/gravatar.js',
        'lib/scoring.js',
        'lib/vote.js'],
        ['client', 'server']);


  // server folder files
  api.add_files('lib/server/toolbox.js', 'server');
  api.add_files('lib/server/api.js', 'server');
  api.add_files('lib/server/migrations.js', 'server');
  api.add_files('lib/server/notifications.js', 'server');
  api.add_files('lib/server/publications.js', 'server');
  api.add_files('lib/server/scoring.js', 'server');
  api.add_files('lib/server/search.js', 'server');
  api.add_files('lib/server/users.js', 'server');



  api.add_files('lib/permissions.js',['server','client'])
  api.add_files('lib/collections/comments.js', ['server', 'client']);
  api.add_files('lib/collections/errors.js', ['server', 'client']);
  api.add_files('lib/collections/notifications.js', ['server', 'client']);
  api.add_files('lib/collections/posts.js', ['server', 'client']);
  api.add_files('lib/collections/searches.js', ['server', 'client']);
  api.add_files('lib/collections/settings.js', ['server', 'client']);
  api.add_files('lib/collections/users.js', ['server', 'client']);


  api.add_files('lib/collections/categories.js', ['server', 'client']);

  // view/admin
  api.add_files('lib/client/views/admin/category_item.html', 'client');
  api.add_files('lib/client/views/admin/category_item.js', 'client');
  api.add_files('lib/client/views/admin/categories.html', 'client');
  api.add_files('lib/client/views/admin/categories.js', 'client');
  api.add_files('lib/client/views/admin/logs.html', 'client');
  api.add_files('lib/client/views/admin/logs.js', 'client');

  // views/comment
  api.add_files('lib/client/views/comments/comment_edit.html', 'client');
  api.add_files('lib/client/views/comments/comment_edit.js', 'client');
  api.add_files('lib/client/views/comments/comment_form.html', 'client');
  api.add_files('lib/client/views/comments/comment_form.js', 'client');
  api.add_files('lib/client/views/comments/comment_item.css', 'client');
  api.add_files('lib/client/views/comments/comment_item.html', 'client');
  api.add_files('lib/client/views/comments/comment_item.js', 'client');
  api.add_files('lib/client/views/comments/comment_list.html', 'client');
  api.add_files('lib/client/views/comments/comment_list.js', 'client');
  api.add_files('lib/client/views/comments/comment_page.html', 'client');
  api.add_files('lib/client/views/comments/comment_page.js', 'client');
  api.add_files('lib/client/views/comments/comment_reply.html', 'client');
  api.add_files('lib/client/views/comments/comment_reply.js', 'client');

  // views/common
  api.add_files('lib/client/views/common/error.html', 'client');
  api.add_files('lib/client/views/common/error_item.html', 'client');
  api.add_files('lib/client/views/common/error_item.js', 'client');
  api.add_files('lib/client/views/common/error.js', 'client');
  api.add_files('lib/client/views/common/footer.html', 'client');
  api.add_files('lib/client/views/common/footer.js', 'client');
  api.add_files('lib/client/views/common/layout.html', 'client');
  api.add_files('lib/client/views/common/layout.js', 'client');
  api.add_files('lib/client/views/common/nav.css', 'client');
  api.add_files('lib/client/views/common/nav.html', 'client');
  api.add_files('lib/client/views/common/nav.js', 'client');
  api.add_files('lib/client/views/common/search.html', 'client');
  api.add_files('lib/client/views/common/search.css', 'client');
  api.add_files('lib/client/views/common/search.js', 'client');


  // views/errors/
  api.add_files('lib/client/views/errors/already_logged_in.html', 'client');
  api.add_files('lib/client/views/errors/no_rights.html', 'client');
  api.add_files('lib/client/views/errors/no_rights.js', 'client');

  // views/notification
  api.add_files('lib/client/views/notifications/notification_item.css', 'client');
  api.add_files('lib/client/views/notifications/notification_item.html', 'client');
  api.add_files('lib/client/views/notifications/notification_item.js', 'client');
  api.add_files('lib/client/views/notifications/notifications.html', 'client');
  api.add_files('lib/client/views/notifications/notifications.js', 'client');
  api.add_files('lib/client/views/notifications/unsubscribe.html', 'client');
  api.add_files('lib/client/views/notifications/unsubscribe.js', 'client');


  // views/posts
  api.add_files('lib/client/views/posts/post_edit.html', 'client');
  api.add_files('lib/client/views/posts/post_edit.js', 'client');
  api.add_files('lib/client/views/posts/post_item.css', 'client');
  api.add_files('lib/client/views/posts/post_item.html', 'client');
  api.add_files('lib/client/views/posts/post_item.js', 'client');
  api.add_files('lib/client/views/posts/post_page.html', 'client');
  api.add_files('lib/client/views/posts/post_page.js', 'client');
  api.add_files('lib/client/views/posts/posts_digest.html', 'client');
  api.add_files('lib/client/views/posts/posts_digest.js', 'client');
  api.add_files('lib/client/views/posts/posts_list.html', 'client');
  api.add_files('lib/client/views/posts/posts_list.js', 'client');
  api.add_files('lib/client/views/posts/post_submit.html', 'client');
  api.add_files('lib/client/views/posts/post_submit.js', 'client');

  // views/users
  api.add_files('lib/client/views/users/user_edit.html', 'client');
  api.add_files('lib/client/views/users/user_edit.js', 'client');
  api.add_files('lib/client/views/users/user_email.html', 'client');
  api.add_files('lib/client/views/users/user_email.js', 'client');
  api.add_files('lib/client/views/users/user_item.html', 'client');
  api.add_files('lib/client/views/users/user_item.js', 'client');
  api.add_files('lib/client/views/users/user_profile.html', 'client');
  api.add_files('lib/client/views/users/user_profile.js', 'client');
  api.add_files('lib/client/views/users/user_profile.css', 'client');
  api.add_files('lib/client/views/users/users.css', 'client');
  api.add_files('lib/client/views/users/users.html', 'client');
  api.add_files('lib/client/views/users/users.js', 'client');


  // client directory
  api.add_files('lib/client/helpers/config.js', 'client');
  api.add_files('lib/client/helpers/handlebars.js', 'client');

  api.add_files('lib/client/js/autolink.js', 'client');
  api.add_files('lib/client/js/jquery.exists.js', 'client');
  api.add_files('lib/client/js/jquery.hotkeys.js', 'client');
  api.add_files('lib/client/js/jquery.select-to-autocomplete.min.js', 'client');
  api.add_files('lib/client/js/jquery.xdomainajax.js', 'client');
  api.add_files('lib/client/spinner.css', 'client');


  api.add_files('lib/client/js/regex_filter.js', 'client');

  api.add_files('lib/client/main.html', 'client');
  api.add_files('lib/client/main.js', 'client');

  // stylesheet
  api.add_files('lib/client/stylesheets/screen.css', 'client');


  api.add_files('lib/public/img/bg@2x.png', 'client');
  api.add_files('lib/public/img/bg-black.png', 'client');
  api.add_files('lib/public/img/bg-header.png', 'client');
  api.add_files('lib/public/img/default_avatar.png', 'client');
  api.add_files('lib/public/img/bg-black@2x.png', 'client');
  api.add_files('lib/public/img/bg-header@2x.png', 'client');
  api.add_files('lib/public/img/bg.png', 'client');


});

