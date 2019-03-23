import Vuex from 'vuex'
import { auth, GoogleProvider } from '~/services/fireinit.js'

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
        console.log('in the store')
        await auth.signInWithPopup(GoogleProvider)
        console.log('Finished Google login')
        return location.reload()
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
