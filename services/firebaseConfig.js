import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyB9wlxXHcLDddY8_o1LgCwiE-jO7BR9m6s',
  authDomain: 'bewerbli.firebaseapp.com',
  databaseURL: 'https://bewerbli.firebaseio.com',
  projectId: 'bewerbli',
  storageBucket: 'bewerbli.appspot.com',
  messagingSenderId: '258527962574'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const database = firebase.database()
const auth = firebase.auth()
const fb = firebase.functions()
const firestorage = firebase.storage()
const currentUser = auth.currentUser
const GoogleProvider = new firebase.auth.GoogleAuthProvider()
const FacebookProvider = new firebase.auth.FacebookAuthProvider()

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const answersCollection = db.collection('answers')
const blobsCollection = db.collection('blobs')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
const documentsCollection = db.collection('documents')

export {
  db,
  fb,
  auth,
  database,
  firestorage,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  answersCollection,
  blobsCollection,
  likesCollection,
  GoogleProvider,
  FacebookProvider,
  documentsCollection
}
