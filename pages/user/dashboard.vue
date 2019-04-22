<template>
  <div id="dashboard">
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
        </div>
      </div>
      <div class="col2">
        <transition name="fade">
          <div v-if="answers">
            <div v-for="(answer, key) in answers" :key="key" class="post">
              <div v-if="key >= 0">
                <h5>{{ steps[key].frage }}</h5>
              </div>
              <h5>{{ answer }}</h5>
                     
         
             
              <ul>
                <li>
                  <a @click="openCommentModal(post)">
                    comments {{ answer.comments }}
                  </a>
                </li>
                <li>
                  <a @click="likePost(post.id, post.likes)">
                    likes {{ answer.likes }}
                  </a>
                </li>
                <li>
                  <a @click="viewPost(post)">
                    edit Answer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div v-else>
            <p class="no-results">
              There are currently no posts
            </p>
          </div>
        </transition>
      </div></transition>
    </section>
  </div>
  </transition>
  </section>
  </div>
  </transition>
  </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import steps from '~/assets/steps.js'
const fb = require('~/services/firebaseConfig.js')

export default {
  layout: 'container',
  filters: {
    formatDate(val) {
      if (!val) {
        return '-'
      }
      const date = val.toDate()
      return moment(date).fromNow()
    },
    trimLength(val) {
      if (val.length < 200) {
        return val
      }
      return `${val.substring(0, 200)}...`
    }
  },
  data() {
    return {
      steps: steps,
      answersArray: this.answers,
      post: {
        content: ''
      },
      comment: {
        postId: '',
        userId: '',
        content: '',
        postComments: 0
      },
      showCommentModal: false,
      showPostModal: false,
      fullPost: {},
      postComments: []
    }
  },
  computed: {
    ...mapState([
      'userProfile',
      'currentUser',
      'posts',
      'answers',
      'hiddenPosts'
    ])
  },

  methods: {
    getSteps(key) {
      return this.steps[key]
    },
    createPost() {
      fb.postsCollection
        .add({
          createdOn: new Date(),
          content: this.post.content,
          userId: this.currentUser.uid,
          userName: this.userProfile.name,
          comments: 0,
          likes: 0
        })
        .then(ref => {
          this.post.content = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    showNewPosts() {
      const updatedPostsArray = this.hiddenPosts.concat(this.posts)
      // clear hiddenPosts array and update posts array
      this.$store.commit('setHiddenPosts', null)
      this.$store.commit('setPosts', updatedPostsArray)
    },
    openCommentModal(post) {
      this.comment.postId = post.id
      this.comment.userId = post.userId
      this.comment.postComments = post.comments
      this.showCommentModal = true
    },
    closeCommentModal() {
      this.comment.postId = ''
      this.comment.userId = ''
      this.comment.content = ''
      this.showCommentModal = false
    },
    addComment() {
      const postId = this.comment.postId
      const postComments = this.comment.postComments

      fb.commentsCollection
        .add({
          createdOn: new Date(),
          content: this.comment.content,
          postId: postId,
          userId: this.currentUser.uid,
          userName: this.userProfile.name
        })
        .then(doc => {
          fb.postsCollection
            .doc(postId)
            .update({
              comments: postComments + 1
            })
            .then(() => {
              this.closeCommentModal()
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    likePost(postId, postLikes) {
      const docId = `${this.currentUser.uid}_${postId}`

      fb.likesCollection
        .doc(docId)
        .get()
        .then(doc => {
          if (doc.exists) {
            return
          }

          fb.likesCollection
            .doc(docId)
            .set({
              postId: postId,
              userId: this.currentUser.uid
            })
            .then(() => {
              // update post likes
              fb.postsCollection.doc(postId).update({
                likes: postLikes + 1
              })
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    viewPost(post) {
      fb.commentsCollection
        .where('postId', '==', post.id)
        .get()
        .then(docs => {
          const commentsArray = []

          docs.forEach(doc => {
            const comment = doc.data()
            comment.id = doc.id
            commentsArray.push(comment)
          })

          this.postComments = commentsArray
          this.fullPost = post
          this.showPostModal = true
        })
        .catch(err => {
          console.log(err)
        })
    },
    closePostModal() {
      this.postComments = []
      this.showPostModal = false
    }
  }
}
</script>
