import Vuex from 'vuex'
const fb = require('~/services/firebaseConfig.js')

const store = () => {
  return new Vuex.Store({
    state: {
      currentUser: null,
      userProfile: {},
      posts: [],
      hiddenPosts: [],
      answers: {}
    },
    actions: {
      clearData({ commit }) {
        commit('setCurrentUser', null)
        commit('setUserProfile', {})
        commit('setPosts', null)
        commit('setAnswers', null)
        commit('setHiddenPosts', null)
      },
      updateAnswers({ commit, state }, data) {
        const answer = data.answer
        const id = data.id
        fb.answersCollection
          .doc(state.currentUser.uid)
          .update({ [id]: answer })
          .then(user => {
            console.log('Data to Firestore sent' + id)
          })

          .catch(err => {
            console.log(err)
          })
      },
      fetchAnswers({ commit, state }) {
        fb.usersCollection
          .doc(state.currentUser.uid)
          .get()
          .then(res => {
            commit('setAnswers', res.data())
          })
          .catch(err => {
            console.log(err)
          })
      },
      fetchUserProfile({ commit, state }) {
        fb.usersCollection
          .doc(state.currentUser.uid)
          .get()
          .then(res => {
            commit('setUserProfile', res.data())
          })
          .catch(err => {
            console.log('FetchUserProfile')
            console.log(err)
          })
      },
      updateProfile({ commit, state }, data) {
        const name = data.name

        fb.usersCollection
          .doc(state.currentUser.uid)
          .update({ name })
          // .then(user => {
          // update all posts by user to reflect new name
          // fb.postsCollection
          //   .where('userId', '==', state.currentUser.uid)
          //   .get()
          //   .then(docs => {
          //     docs.forEach(doc => {
          //       fb.postsCollection.doc(doc.id).update({
          //         userName: name
          //       })
          //     })
          //   })
          // update all comments by user to reflect new name
          // fb.commentsCollection
          //   .where('userId', '==', state.currentUser.uid)
          //   .get()
          //   .then(docs => {
          //     docs.forEach(doc => {
          //       fb.commentsCollection.doc(doc.id).update({
          //         userName: name
          //       })
          //     })
          //   })
          // })

          .catch(err => {
            console.log(err)
          })
      }
    },
    mutations: {
      setCurrentUser(state, val) {
        console.log('setCurrentUser')
        state.currentUser = val
      },
      setUserProfile(state, val) {
        state.userProfile = val
      },
      setPosts(state, val) {
        if (val) {
          state.posts = val
        } else {
          state.posts = []
        }
      },
      setAnswers(state, val) {
        if (val) {
          state.answers = val
          console.log(state.answers)
        } else {
          state.answers = []
        }
      },
      setHiddenPosts(state, val) {
        if (val) {
          // make sure not to add duplicates
          if (!state.hiddenPosts.some(x => x.id === val.id)) {
            state.hiddenPosts.unshift(val)
          }
        } else {
          state.hiddenPosts = []
        }
      }
    }
  })
}

export default store
