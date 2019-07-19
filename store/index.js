import Vuex from 'vuex'
import * as types from './mutation-types'
import apiPeople from '~/store/api/people'
import apiGmail from '~/store/api/gmail'
import dataPeople from '~/store/data/people'
import dataGmail from '~/store/data/gmail'

const fb = require('~/services/firebaseConfig.js')

const store = () => {
  return new Vuex.Store({
    state: {
      config: null,
      isClient: false,
      isTesting: false,
      apiGoogle: null,
      auth: {
        token: null,
        user: null
      },
      google: {
        people_my: {
          connections: [],
          names: {
            displayName: '',
            displayNameLastFirst: '',
            familyName: '',
            givenName: ''
          }
        },
        gmail: {
          inbox: []
        }
      },
      currentUser: null,
      sidebar: false,
      firma: '',
      userProfile: {},
      posts: [],
      hiddenPosts: [],
      answers: [],
      added: [],
      addedSchule: [],
      documentsList: [],
      fragebogenList: [],
      privat: [
        {
          id: 'cc91i8f4',
          name: 'Anschreiben',
          image: require('~/static/turnitin3.png'),

          price: '25',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: 'bcd776vr',
          name: 'Deckblatt',
          image: require('~/static/turnitin3.png'),
          price: '15',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: '727034dw',
          name: 'Lebenslauf',
          image: require('~/static/turnitin3.png'),
          price: '10',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: '727026e3',
          name: 'Club',
          image: require('~/static/turnitin3.png'),
          price: '280',
          features: ['5 Anschreiben', '10 Folgebriefe', '2 Deckblätter']
        }
      ],
      schule: [
        {
          id: 'cc919e21',
          name: 'Anschreiben ',
          image: require('~/static/turnitin3.png'),
          price: '250',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: 'bcd745a6',
          name: 'Deckblatt',
          image: require('~/static/turnitin3.png'),
          price: '120',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: '467026b7',
          name: 'Lebenslauf',
          image: require('~/static/turnitin3.png'),
          price: '100',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        }
      ]
    },
    getters: {
      getConfig: state => state.config,
      isClient: state => state.isClient,
      isTesting: state => state.config.app_env === 'testing',
      getAuth: state => state.auth,
      isAuth: state => !!state.auth.token,
      getGapi: state => state.apiGoogle,
      getGoogleData: state => state.google,
      privatProducts: state => state.privat,
      schulProducts: state => state.schule,
      getNumberOfPrivatProducts: state =>
        state.privat ? state.privat.length : 0,
      getNumberOfSchulProducts: state =>
        state.schule ? state.schule.length : 0,
      cartProducts: state => {
        return state.added.map(({ id, quantity }) => {
          const product = state.privat.find(p => p.id === id)

          return {
            name: product.name,
            price: product.price,
            quantity
          }
        })
      },
      cartProductsSchule: state => {
        return state.addedSchule.map(({ id, quantity }) => {
          const schulproduct = state.schule.find(p => p.id === id)

          return {
            name: schulproduct.name,
            price: schulproduct.price,
            quantity
          }
        })
      }
    },
    actions: {
      receivePeopleMyNames({ commit, state }) {
        let names = null
        if (!state.isTesting) {
          apiPeople.getMyNames().then(names => {
            commit('SET_PEOPLE_MY_NAMES', names)
            if (state.config.debug) {
              console.log('api.people.get - OK.')
            }
          })
        } else {
          names = dataPeople.names[0]
          commit('SET_PEOPLE_MY_NAMES', names)
          if (state.config.debug) {
            console.log('data.people.get - OK.')
          }
        }
      },
      receivePeopleMyConnections({ commit, state }) {
        let connections = null
        if (!state.isTesting) {
          apiPeople.getMyConnections().then(connections => {
            commit('SET_PEOPLE_MY_CONNECTIONS', connections)
            if (state.config.debug) {
              console.log('api.people.connections.list - OK.')
            }
          })
        } else {
          connections = dataPeople.connections
          commit('SET_PEOPLE_MY_CONNECTIONS', connections)
          if (state.config.debug) {
            console.log('data.people.connections.list - OK.')
          }
        }
      },
      receiveGmailMyMessages({ commit, state }) {
        let messages = null
        return new Promise((resolve, reject) => {
          if (!state.isTesting) {
            apiGmail.getMyMessages().then(messages => {
              commit('SET_GMAIL_MY_MESSAGES_LIST', messages)
              if (state.config.debug) {
                console.log('api.gmail.messages.list - OK.')
              }
              resolve(messages)
            })
          } else {
            messages = dataGmail.messages
            commit('SET_GMAIL_MY_MESSAGES_LIST', messages)
            if (state.config.debug) {
              console.log('data.gmail.messages.list - OK.')
            }
            resolve(messages)
          }
        })
      },
      clearData({ commit }) {
        commit('setCurrentUser', null)
      },
      deleteUser({ commit }) {
        commit('setCurrentUser', null)
        commit('setUserProfile', {})
        commit('setPosts', null)
        commit('setAnswers', null)
        commit('setHiddenPosts', null)
        commit('selectedPlans', null)
      },

      addToCart({ commit }, product) {
        commit(types.ADD_TO_CART, {
          id: product.id
        })
      },
      removeFromCart({ commit }, product) {
        commit(types.REMOVE_FROM_CART, {
          id: product.id
        })
      },
      addToSchulCart({ commit }, schulproduct) {
        commit(types.ADD_TO_SCHUL_CART, {
          id: schulproduct.id
        })
      },
      removeFromSchulCart({ commit }, schulproduct) {
        commit(types.REMOVE_FROM_SCHUL_CART, {
          id: schulproduct.id
        })
      },
      updateAnswers({ state }, data) {
        if (data.answer) {
          const answer = data.answer
          const id = data.id
          setTimeout(() => {
            fb.usersCollection
              .doc(state.currentUser.uid)
              .collection('fragebogen')
              .doc(state.firma)
              .set({}, { merge: true })

            fb.usersCollection
              .doc(state.currentUser.uid)
              .collection('fragebogen')
              .doc(state.firma)
              .update({ [id]: answer })
              .then(user => {})

              .catch(err => {
                console.log(err)
              })
          }, 200)
        }
      },
      fetchAnswers({ commit, state }) {
        fb.usersCollection
          .doc(state.currentUser.uid)
          .collection('fragebogen')
          .doc(state.firma)
          .get()
          .then(res => {
            commit('setAnswers', res.data())
          })
          .catch(err => {
            console.log(err)
          })
      },
      fetchUserProfile({ commit, state }) {
        if (state.firma) {
          fb.usersCollection
            .doc(state.currentUser.uid)
            .collection('fragebogen')
            .doc(state.firma)
            .get()
            .then(res => {
              commit('setUserProfile', res.data())
            })
            .catch(err => {
              console.log('FetchUserProfile')
              console.log(err)
            })
        }
      },

      fetchDocumentsList({ commit, state }) {
        fb.usersCollection
          .doc(state.currentUser.uid)
          .collection('dokumente')
          .get()
          .then(querySnapshot => {
            const documentNames = []
            querySnapshot.forEach(doc => {
              documentNames.push(doc.id)

              commit('setDocumentsList', documentNames)
            })
          })
          .catch(err => {
            console.log(err)
          })
      },
      fetchFragebogenList({ commit, state }) {
        fb.usersCollection
          .doc(state.currentUser.uid)
          .collection('fragebogen')
          .get()
          .then(querySnapshot => {
            const fragebogenNames = []
            querySnapshot.forEach(doc => {
              fragebogenNames.push(doc.id)

              commit('setFragebogenList', fragebogenNames)
            })
          })
          .catch(err => {
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
      SET_CONFIG(state, config) {
        state.config = config
      },
      SET_IS_CLIENT(state, isClient) {
        state.isClient = isClient
      },
      SET_IS_TESTING(state, isTesting) {
        state.isTesting = isTesting
      },
      SET_GOOGLE_API(state, apiGoogle) {
        state.apiGoogle = apiGoogle
      },
      SET_USER(state, userData) {
        state.auth.user = userData
      },
      SET_TOKEN(state, token) {
        state.auth.token = token
      },
      SET_PEOPLE_MY_NAMES(state, names) {
        state.google.people_my.names = names
      },
      SET_PEOPLE_MY_CONNECTIONS(state, connections) {
        state.google.people_my.connections = connections
      },
      SET_GMAIL_MY_MESSAGES_LIST(state, messages) {
        state.google.gmail.inbox = messages
      },
      [types.ADD_TO_CART](state, { id }) {
        const record = state.added.find(p => p.id === id)
        console.log('add to cart')
        if (!record) {
          state.added.push({
            id,
            quantity: 1
          })
        } else {
          record.quantity++
        }
      },
      [types.REMOVE_FROM_CART](state, { id }) {
        state.added = state.added.filter(p => p.id !== id)
        console.log('hello removing from cart')
      },
      [types.ADD_TO_SCHUL_CART](state, { id }) {
        const record = state.addedSchule.find(p => p.id === id)

        if (!record) {
          state.addedSchule.push({
            id,
            quantity: 1
          })
        } else {
          record.quantity++
        }
      },
      [types.REMOVE_FROM_SCHUL_CART](state, { id }) {
        state.addedSchule = state.addedSchule.filter(p => p.id !== id)
      },

      setCurrentUser(state, val) {
        state.currentUser = val
        if (state.currentUser && !state.currentUser.photoURL) {
          state.currentUser.photoURL =
            'https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&r=g&d=identicon'
        }
      },
      setUserProfile(state, val) {
        state.userProfile = val
      },
      toggleSidebar(state, val) {
        state.sidebar = !state.sidebar
      },
      sidebarTrue(state, val) {
        state.sidebar = true
      },
      sidebarFalse(state, val) {
        state.sidebar = false
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
      setDocumentsList(state, val) {
        state.documentsList = val
      },
      setFragebogenList(state, val) {
        state.fragebogenList = val
      },
      setFirma(state, val) {
        state.firma = val
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
