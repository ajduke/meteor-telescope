// TODO: figure out why things don't work when you set a field to default to "true"

Setting = FormModel.extend({
      
  blankSchema: {
    requireViewInvite: false,
    requirePostInvite: false,
    requirePostsApproval: false,
    emailNotifications: false,
    nestedComments: false,
    redistributeKarma: false,
    defaultEmail: '',
    scoreUpdateInterval: '',
    postInterval: '',
    commentInterval: '',
    maxPostsPerDay: '',
    startInvitesCount: 3,
    postsPerPage: 10,
    title: '',
    tagline: '',
    logoUrl: '',
    logoHeight: '',
    logoWidth: '',
    language: 'en',
    backgroundColor: '',
    secondaryColor: '',
    buttonColor: '',
    headerColor: '',
    googleAnalyticsId: '',
    mixpanelId: '',
    clickyId:'',
    goSquaredId: '',
    embedlyId: '',
    // bitlyToken: '',
    footerCode: '',
    extraCode: '', 
    notes: ''
  },      

  init: function(options) {
    this._super(Telescope_Settings, options);
    this.overwriteTitle('scoreUpdateInterval', 'Scoring Frequency'); 
    this.overwriteTitle('requireViewInvite', 'Require invite to view?');
    this.overwriteTitle('requirePostInvite', 'Require invite to post?');
    this.overwriteTitle('emailNotifications', 'Enable email notifications?');
    this.overwriteTitle('requirePostsApproval', 'Posts must be approved by admin?');
    this.overwriteTitle('title', 'Site Title');
    this.overwriteTitle('mixpanelId', '<a href="http://mixpanel.com/">Mixpanel</a> ID');
    this.overwriteTitle('clickyId', '<a href="http://getclicky.com/">Clicky</a> ID');
    this.overwriteTitle('goSquaredId', '<a href="http://gosquared.com/">GoSquared</a> ID');
    // this.overwriteTitle('bitlyToken', '<a href="https://bitly.com/a/oauth_apps">Bitly</a> Token');
    this.overwriteTitle('logoUrl', 'Logo URL');
    this.overwriteType('footerCode', 'textarea');
    this.overwriteType('extraCode', 'textarea');
    this.overwriteType('notes', 'textarea');
  }
});
