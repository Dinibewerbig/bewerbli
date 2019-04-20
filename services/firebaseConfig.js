import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyCsGxUaE71sH2O0VO2Iu4XTM5wyJ9XQQiI',
  authDomain: 'bewerbli.firebaseapp.com',
  databaseURL: 'https://bewerbli.firebaseio.com',
  projectId: 'bewerbli',
  storageBucket: 'bewerbli.appspot.com',
  messagingSenderId: '258527962574'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
