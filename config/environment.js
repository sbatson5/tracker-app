/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tracker-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'frame-src': "'self'",
      'script-src': [
          "'self'",
          "http://www.giantbomb.com",
        ].join(' '),
      'font-src': "'self' data: https://fonts.gstatic.com",
      'connect-src': "'self' http://www.giantbomb.com",
      'img-src': [
          "'self'",
          "http://www.giantbomb.com",
          "*.giantbomb.com"
        ].join(' '),
      'style-src': "'self' 'unsafe-inline' http://www.giantbomb.com",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
