import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCsGxUaE71sH2O0VO2Iu4XTM5wyJ9XQQiI',
  authDomain: 'bewerbli.firebaseapp.com',
  databaseURL: 'https://bewerbli.firebaseio.com',
  projectId: 'bewerbli',
  storageBucket: 'bewerbli.appspot.com',
  messagingSenderId: '258527962574'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const fireDb = firebase.firestore()
export default firebase
