module.exports = {
  app_name: 'google-api-firebase',
  google: {
    client_id:
      '258527962574-1gbm66skoj0cr4ih4ld2gjvlmgb9dio3.apps.googleusercontent.com',
    api_key: 'AIzaSyDiOgv3xPEUlw9OcIOEThmEas4kTBZ3-Os',
    hosted_domain: '****.com',
    scope:
      'profile email https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/plus.login https://mail.google.com/',
    discovery_docs: [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
      'https://people.googleapis.com/$discovery/rest?version=v1'
    ]
  },
  firebase: {
    apiKey: 'AIzaSyDiOgv3xPEUlw9OcIOEThmEas4kTBZ3-Os',
    authDomain: 'bewerbli.firebaseapp.com',
    databaseURL: 'https://bewerbli.firebaseio.com',
    projectId: 'bewerbli',
    storageBucket: 'bewerbli.appspot.com',
    messagingSenderId: '258527962574',
    appId: '1:258527962574:web:caa82260c7ee89a5'
  }
}
