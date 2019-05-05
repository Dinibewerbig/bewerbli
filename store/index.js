import Vuex from 'vuex'
import * as types from './mutation-types'

const fb = require('~/services/firebaseConfig.js')

const store = () => {
  return new Vuex.Store({
    state: {
      currentUser: null,
      userProfile: {},
      posts: [],
      hiddenPosts: [],
      answers: {},
      added: [],
      addedSchule: [],
      privat: [
        {
          id: 'cc91i8f4',
          name: 'Anschreiben',
          price: '24',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: 'bcd776vr',
          name: 'Deckblatt',
          price: '10',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: '727034dw',
          name: 'Lebenslauf',
          price: '12',
          features: [
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…'
          ]
        },
        {
          id: '727026e3',
          name: 'Club',
          price: '280',
          features: ['5 Anschreiben', '10 Folgebriefe', '2 Deckblätter']
        }
      ],
      schule: [
        {
          id: 'cc919e21',
          name: 'Anschreiben ',
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
