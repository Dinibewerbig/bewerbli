const fb = require('~/services/firebaseConfig.js')

export default context => {
  const { store } = context

  fb.auth.onAuthStateChanged(user => {
    if (user) {
      store.commit('setCurrentUser', user)
      store.dispatch('fetchUserProfile')
      store.dispatch('fetchAnswers')

      // if (!user.photoURL) {
      //   user
      //     .updateProfile({
      //       photoURL:
      //         'https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&r=g&d=identicon'
      //     })
      //     .then(function() {
      //       console.log(
      //         'https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&r=g&d=identicon'
      //       )
      //     })
      //     .catch(function(error) {
      //       console.log(error)
      //     })
      // }

      fb.usersCollection.doc(user.uid).onSnapshot(doc => {
        store.commit('setUserProfile', doc.data())
      })

      // fb.usersCollection.doc(user.uid).set({
      //   name: user.uid
      // })

      fb.answersCollection.doc(user.uid).onSnapshot(doc => {
        store.commit('setAnswers', doc.data())
      })

      // fb.answersCollection.doc(user.uid).set({
      //   0: user.uid
      // })

      // fb.answersCollection
      //   .orderBy('createdOn', 'desc')
      //   .onSnapshot(querySnapshot => {
      //     const answersArray = []
      //     querySnapshot.forEach(doc => {
      //       const answer = doc.data()
      //       answer.id = doc.id
      //       answersArray.push(answer)
      //     })

      //     store.commit('setAnswers', answersArray)
      //   })

      // realtime updates from our posts collection
      fb.postsCollection
        .orderBy('createdOn', 'desc')
        .onSnapshot(querySnapshot => {
          // check if created by currentUser
          let createdByCurrentUser
          if (querySnapshot.docs.length) {
            createdByCurrentUser =
              store.state.currentUser.uid ===
              querySnapshot.docChanges()[0].doc.data().userId
          }

          // add new posts to hiddenPosts array after initial load
          if (
            querySnapshot.docChanges().length !== querySnapshot.docs.length &&
            querySnapshot.docChanges()[0].type === 'added' &&
            !createdByCurrentUser
          ) {
            const post = querySnapshot.docChanges()[0].doc.data()
            post.id = querySnapshot.docChanges()[0].doc.id

            store.commit('setHiddenPosts', post)
          } else {
            const postsArray = []

            querySnapshot.forEach(doc => {
              const post = doc.data()
              post.id = doc.id
              postsArray.push(post)
            })

            store.commit('setPosts', postsArray)
          }
        })
    } else {
      console.log('no user')
    }
  })
}
