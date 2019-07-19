// The values in the configuration files "config/env/"
// will be overwritten by the values of "env.js" file
export default {
  app_env: 'development', // development, production, testing
  global: {
    debug: true,
    gapi: {
      apiKey: 'AIzaSyB9wlxXHcLDddY8_o1LgCwiE-jO7BR9m6s',
      clientId:
        '258527962574-1gbm66skoj0cr4ih4ld2gjvlmgb9dio3.apps.googleusercontent.com'
    }
  },
  production: {
    api: {
      base_url: 'http://real-production.com/api'
    }
  },
  development: {
    api: {
      base_url: 'http://real-development.com/api'
    }
  },
  testing: {
    api: {
      base_url: 'http://real-testing.com/api'
    }
  }
}
