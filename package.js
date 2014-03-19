Package.describe({
  summary: "Meteor package for Telescope Application"
});

Package.on_use(function (api) {

  // server folder files
  api.add_files('lib/telescope-integration/server/api.js', 'server');
  api.add_files('lib/telescope-integration/server/email.js', 'server');
  api.add_files('lib/telescope-integration/server/invites.js', 'server');
  api.add_files('lib/telescope-integration/server/migrations.js', 'server');
  api.add_files('lib/telescope-integration/server/notifications.js', 'server');
  api.add_files('lib/telescope-integration/server/publications.js', 'server');
  api.add_files('lib/telescope-integration/server/rss.js', 'server');
  api.add_files('lib/telescope-integration/server/scoring.js', 'server');
  api.add_files('lib/telescope-integration/server/search.js', 'server');
  api.add_files('lib/telescope-integration/server/toolbox.js', 'server');
  api.add_files('lib/telescope-integration/server/users.js', 'server');


  api.add_files('lib/telescope-integration/collections/categories.js', ['server', 'client']);
  api.add_files('lib/telescope-integration/collections/comments.js', ['server', 'client']);
  api.add_files('lib/telescope-integration/collections/errors.js', ['server', 'client']);
  api.add_files('lib/telescope-integration/collections/notifications.js', ['server', 'client']);
  api.add_files('lib/telescope-integration/collections/posts.js', ['server', 'client']);
  api.add_files('lib/telescope-integration/collections/searches.js', ['server', 'client']);
  api.add_files('lib/telescope-integration/collections/settings.js', ['server', 'client']);
  api.add_files('lib/telescope-integration/collections/users.js', ['server', 'client']);


  // adding the required file for package
  api.add_files(['lib/telescope-integration/lib/analytics.js',
    'lib/telescope-integration/lib/events.js',
    'lib/telescope-integration/lib/helpers.js',
    'lib/telescope-integration/lib/main.js',
    'lib/telescope-integration/lib/parameters.js',
    'lib/telescope-integration/lib/router.js',
    'lib/telescope-integration/lib/users.js',
    'lib/telescope-integration/lib/deepExtend.js',
    'lib/telescope-integration/lib/gravatar.js',
    'lib/telescope-integration/lib/permissions.js',
    'lib/telescope-integration/lib/scoring.js',
    'lib/telescope-integration/lib/vote.js'],
    ['server', 'client']);


// adding the required packages
//  api.add_files(['lib/telescope-integration/packages/mailchimp/mailchimp.js'], 'server');
//  api.add_files(['lib/telescope-integration/packages/telescope-i18n/i18n.js'], ['client', 'server']);
//  api.add_files('lib/telescope-integration/packages/rss/rss.js', 'server');
//
//  api.export('MailChimpAPI');
//  api.export('i18n');
//  api.export('RSS');

  api.add_files(['lib/telescope-integration/lib/locales/fr.js',
    'lib/telescope-integration/lib/locales/en.js',
    'lib/telescope-integration/lib/locales/es.js',
    'lib/telescope-integration/lib/locales/zh.js'], 'server');



  // view/admin
  api.add_files('lib/telescope-integration/client/views/admin/categories.html', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/categories.js', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/category_item.html', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/category_item.js', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/logs.html', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/logs.js', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/settings.html', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/settings.js', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/toolbox.html', 'client');
  api.add_files('lib/telescope-integration/client/views/admin/toolbox.js', 'client');

  // views/comment
  api.add_files('lib/telescope-integration/client/views/comments/comment_deleted.html', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_edit.html', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_edit.js', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_form.html', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_form.js', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_item.css', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_item.html', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_item.js', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_list.html', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_list.js', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_page.html', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_page.js', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_reply.html', 'client');
  api.add_files('lib/telescope-integration/client/views/comments/comment_reply.js', 'client');

  // views/common
  api.add_files('lib/telescope-integration/client/views/common/error.html', 'client');
  api.add_files('lib/telescope-integration/client/views/common/error_item.html', 'client');
  api.add_files('lib/telescope-integration/client/views/common/error_item.js', 'client');
  api.add_files('lib/telescope-integration/client/views/common/error.js', 'client');
  api.add_files('lib/telescope-integration/client/views/common/footer.html', 'client');
  api.add_files('lib/telescope-integration/client/views/common/footer.js', 'client');
  api.add_files('lib/telescope-integration/client/views/common/layout.html', 'client');
  api.add_files('lib/telescope-integration/client/views/common/layout.js', 'client');
  api.add_files('lib/telescope-integration/client/views/common/nav.css', 'client');
  api.add_files('lib/telescope-integration/client/views/common/nav.html', 'client');
  api.add_files('lib/telescope-integration/client/views/common/nav.js', 'client');
  api.add_files('lib/telescope-integration/client/views/common/search.html', 'client');
  api.add_files('lib/telescope-integration/client/views/common/search.js', 'client');


  // views/errors/
  api.add_files('lib/telescope-integration/client/views/errors/already_logged_in.html', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/loading.html', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/no_account.html', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/no_account.js', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/no_invite.html', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/no_invite.js', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/no_rights.html', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/no_rights.js', 'client');
  api.add_files('lib/telescope-integration/client/views/errors/not_found.html', 'client');

  // views/notification
  api.add_files('lib/telescope-integration/client/views/notifications/notification_item.css', 'client');
  api.add_files('lib/telescope-integration/client/views/notifications/notification_item.html', 'client');
  api.add_files('lib/telescope-integration/client/views/notifications/notification_item.js', 'client');
  api.add_files('lib/telescope-integration/client/views/notifications/notifications.html', 'client');
  api.add_files('lib/telescope-integration/client/views/notifications/notifications.js', 'client');
  api.add_files('lib/telescope-integration/client/views/notifications/unsubscribe.html', 'client');
  api.add_files('lib/telescope-integration/client/views/notifications/unsubscribe.js', 'client');


  // views/posts
  api.add_files('lib/telescope-integration/client/views/posts/post_deleted.html', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_edit.html', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_edit.js', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_item.css', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_item.html', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_item.js', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_page.html', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_page.js', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/posts_digest.html', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/posts_digest.js', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/posts_list.html', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/posts_list.js', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_submit.html', 'client');
  api.add_files('lib/telescope-integration/client/views/posts/post_submit.js', 'client');

  // views/users
  api.add_files('lib/telescope-integration/client/views/users/forgot_password.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/forgot_password.js', 'client');
  api.add_files('lib/telescope-integration/client/views/users/signin.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/signin.js', 'client');
  api.add_files('lib/telescope-integration/client/views/users/signup.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/signup.js', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_edit.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_edit.js', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_email.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_email.js', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_item.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_item.js', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_profile.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/user_profile.js', 'client');
  api.add_files('lib/telescope-integration/client/views/users/users.css', 'client');
  api.add_files('lib/telescope-integration/client/views/users/users.html', 'client');
  api.add_files('lib/telescope-integration/client/views/users/users.js', 'client');


// client directory
  api.add_files('lib/telescope-integration/client/helpers/config.js', 'client');
  api.add_files('lib/telescope-integration/client/helpers/handlebars.js', 'client');

  api.add_files('lib/telescope-integration/client/js/mixpanel.js', 'client');
  api.add_files('lib/telescope-integration/client/js/autolink.js', 'client');
  api.add_files('lib/telescope-integration/client/js/bootstrap-datepicker.js', 'client');
  api.add_files('lib/telescope-integration/client/js/jquery.exists.js', 'client');
  api.add_files('lib/telescope-integration/client/js/jquery.hotkeys.js', 'client');
  api.add_files('lib/telescope-integration/client/js/jquery.select-to-autocomplete.min.js', 'client');
  api.add_files('lib/telescope-integration/client/js/jquery.sharrre-1.3.2.min.js', 'client');
  api.add_files('lib/telescope-integration/client/js/jquery-ui-autocomplete.js', 'client');
  api.add_files('lib/telescope-integration/client/js/jquery.xdomainajax.js', 'client');

  api.add_files('lib/telescope-integration/client/models/setting.js', 'client');

  api.add_files('lib/telescope-integration/client/js/regex_filter.js', 'client');

  api.add_files('lib/telescope-integration/client/login.html', 'client');
  api.add_files('lib/telescope-integration/client/login.js', 'client');
  api.add_files('lib/telescope-integration/client/main.html', 'client');
  api.add_files('lib/telescope-integration/client/main.js', 'client');




  // stylesheet
  api.add_files('lib/telescope-integration/client/stylesheets/screen.css', 'client');


  api.add_files('lib/telescope-integration/public/img/bg@2x.png', 'client');
  api.add_files('lib/telescope-integration/public/img/bg-black.png', 'client');
  api.add_files('lib/telescope-integration/public/img/bg-header.png', 'client');
  api.add_files('lib/telescope-integration/public/img/default_avatar.png', 'client');
  api.add_files('lib/telescope-integration/public/img/logo@2x.png', 'client');
  api.add_files('lib/telescope-integration/public/img/telescope-logo2.png', 'client');
  api.add_files('lib/telescope-integration/public/img/telescope-logo.png', 'client');
  api.add_files('lib/telescope-integration/public/img/bg-black@2x.png', 'client');
  api.add_files('lib/telescope-integration/public/img/bg-header@2x.png', 'client');
  api.add_files('lib/telescope-integration/public/img/bg.png', 'client');
  api.add_files('lib/telescope-integration/public/img/favicon.ico', 'client');
  api.add_files('lib/telescope-integration/public/img/loading.gif', 'client');
  api.add_files('lib/telescope-integration/public/img/logo.png', 'client');
  api.add_files('lib/telescope-integration/public/img/telescope-logo@2x.png', 'client');
  api.add_files('lib/telescope-integration/public/img/thegrid.svg', 'client');

  // dependecies required by package
  api.use(['templating'], 'client');
  api.use(['jquery',
    'backbone',
    'accounts-base',
    'accounts-password',
    'accounts-twitter',
    'spiderable',
    'email',
    'database-forms',
    'crypto-md5',
    'momentjs',
    'rss',
    'telescope-i18n',
    'mailchimp',
    'standard-app-packages',
    'iron-router',
    'nprogress',
    'fast-render',
    'spin',
    'bootstrap-3',
    'fontawesome4'
  ], ['client', 'server']);



});

Npm.depends({
  "mailchimp": "1.0.3",
  "rss": '0.0.4'
});
