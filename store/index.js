import Vuex from 'vuex'
const fb = require('~/services/firebaseConfig.js')

const store = () => {
  return new Vuex.Store({
    state: {
      currentUser: null,
      userProfile: {},
      posts: [],
      hiddenPosts: []
    },
    actions: {
      clearData({ commit }) {
        commit('setCurrentUser', null)
        commit('setUserProfile', {})
        commit('setPosts', null)
        commit('setHiddenPosts', null)
      },
      fetchUserProfile({ commit, state }) {
        fb.usersCollection
          .doc(state.currentUser.uid)
          .get()
          .then(res => {
            commit('setUserProfile', res.data())
          })
          .catch(err => {
            console.log(err)
          })
      },
      updateProfile({ commit, state }, data) {
        const name = data.name
        const title = data.title

        fb.usersCollection
          .doc(state.currentUser.uid)
          .update({ name, title })
          .then(user => {
            // update all posts by user to reflect new name
            fb.postsCollection
              .where('userId', '==', state.currentUser.uid)
              .get()
              .then(docs => {
                docs.forEach(doc => {
                  fb.postsCollection.doc(doc.id).update({
                    userName: name
                  })
                })
              })
            // update all comments by user to reflect new name
            fb.commentsCollection
              .where('userId', '==', state.currentUser.uid)
              .get()
              .then(docs => {
                docs.forEach(doc => {
                  fb.commentsCollection.doc(doc.id).update({
                    userName: name
                  })
                })
              })
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    mutations: {
      setCurrentUser(state, val) {
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
