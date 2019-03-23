import Vuex from 'vuex'
import { auth, GoogleProvider, FacebookProvider } from '~/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    getters: {
      activeUser: state => {
        return state.user
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
        console.log(state.user + 'hello state user')
      }
    },
    actions: {
      autoSignIn({ commit }, payload) {
        console.log('in the store')
        commit('setUser', payload)
      },
      async googleSignIn() {
        await auth.signInWithPopup(GoogleProvider)
        console.log('Finished Google login')
        return location.reload()
      },
      async facebookSignIn() {
        try {
          await auth.signInWithPopup(FacebookProvider)
          console.log('Finished Facebook login')
          alert('Facebook login successful')
          return location.reload()
        } catch (err) {
          alert(err)
        }
      },

      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            commit('setUser', null)
          })
          .catch(error => console.log(error))
      }
    }
  })
}

export default createStore
