import Vuex from 'vuex'
import { auth, GoogleProvider, FacebookProvider } from '~/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      account: null
    },
    getters: {
      activeUser: state => {
        return state.user
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
        if (state.user != null) {
          console.log(
            state.user +
              state.user.displayName +
              ' ' +
              state.user.photoURL +
              ' ' +
              state.user.email +
              ' ' +
              state.user.emailVerified
          )
        }
        if (state.user != null) {
          state.user.providerData.forEach(function(profile) {
            console.log('Sign-in provider: ' + profile.providerId)
            console.log('  Provider-specific UID: ' + profile.uid)
            console.log('  Name: ' + profile.displayName)
            console.log('  Email: ' + profile.email)
            console.log('  Photo URL: ' + profile.photoURL)
          })
        }
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
        this.$router.push('/user/konto')
      },
      async facebookSignIn() {
        try {
          await auth.signInWithPopup(FacebookProvider)
          console.log('Finished Facebook login')
          this.$router.push('/user/konto')
        } catch (err) {
          console.log(err)
        }
      },
      async signInWithEmail({ state }, account) {
        try {
          console.log('in the store')
          await auth.createUserWithEmailAndPassword(
            account.email,
            account.password
          )
          console.log('Email and Password Login')
          this.$router.push('/user/konto')
        } catch (err) {
          console.log(err)
        }
      },

      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            console.log('in the store signed out...')
            commit('setUser', null)
            this.$router.push('/')
          })
          .catch(error => console.log(error))
      }
    }
  })
}

export default createStore
