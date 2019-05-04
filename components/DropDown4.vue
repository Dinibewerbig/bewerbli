<template>
  <div class="card">
    <div class="card-header">
      <h1>Dashboard</h1> <!---->
    </div> 
    
    <div class="card-body">
      <div v-if="currentUser" class="flex items-center ml-6 pl-6 border-l border-grey">
        <img
          v-if="currentUser"
          :src="currentUser.photoURL"
          alt="avatar"
          width="35"
          height="35"
          class="rounded-full"
        > 
        <img v-else src="https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&amp;r=g&amp;d=identicon" width="35" height="35" class="rounded-full"> 
        <div class="ml-3 flex-1">
          <div class="text-black text-sm font-bold leading-tight">
            {{ userProfile.name }}
          </div> 
          <div
            class="text-primary hover:underline text-sm font-bold leading-tight no-underline block"
            @click="logout"
          >
            Log out
          </div>
        </div>
      </div>
      <div v-else class="flex">
        <div class=" pr-10">
          <div class="text-black font-bold">
            Um zu deinem Dashboard zu gelangen, solltest du dich zuerst anmelden. 
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn--primary" @click="$modal.show('login-modal')">
        <span>Login</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

const fb = require('~/services/firebaseConfig.js')
export default {
  layout: 'login',
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
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch('clearData')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
