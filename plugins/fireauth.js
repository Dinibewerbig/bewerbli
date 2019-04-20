const fb = require('~/services/firebaseConfig.js')

export default context => {
  const { store } = context

  fb.auth.onAuthStateChanged(user => {
    if (user) {
      store.commit('setCurrentUser', user)
      store.dispatch('fetchUserProfile')

      fb.usersCollection.doc(user.uid).onSnapshot(doc => {
        store.commit('setUserProfile', doc.data())
      })

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
    }
  })
}
