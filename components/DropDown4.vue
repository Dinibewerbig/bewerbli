<template>
  <div class="">
    <div class="border-bottom pb-6 mb-6">
      <h2 class="font-normal text-white">
        Dashboard
      </h2>
    </div>

    <div class="">
      <div v-if="currentUser" class="flex items-center mb-8">
        <img
          v-if="currentUser"
          :src="currentUser.photoURL"
          alt="avatar"
          width="35"
          height="35"
          class="rounded-full"
        >
        <img
          v-else
          src="https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&amp;r=g&amp;d=identicon"
          width="35"
          height="35"
          class="rounded-full"
        >
        <div class="ml-3 flex-1">
          <div class="text-info1 text-sm text-white  leading-tight">
            {{ userProfile.name }}
          </div>
          <div
            class="text-info4 text-sm no-underline light leading-tight no-underline block"
            @click="logout"
          >
            Log out
          </div>
        </div>
      </div>
      <div v-else class="flex">
        <div class="pr-10">
          <div
            class="text-white"
          >
            Um zu deinem Dashboard zu gelangen, solltest du dich zuerst anmelden.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <nuxt-link v-if="currentUser" to="/dashboard/account" class=" p-3 rounded light no-underline text-info3 ">
        <TrelloIcon />
        <span>Zum Dashboard</span>
        <ArrowRightIcon />
      </nuxt-link>
      <nuxt-link v-if="currentUser" to="/fragebogen/anmeldung" class="p-3 rounded light no-underline text-info4 ">
        <ClipboardIcon />
        <span>Zum Fragebogen</span>
        <ArrowRightIcon />
      </nuxt-link>
      <nuxt-link v-if="currentUser" to="/editor" class="p-3 rounded light no-underline text-info4 ">
        <FeatherIcon />
        <span>Zum Editor</span>
        <ArrowRightIcon />
      </nuxt-link>
      <button v-else class="p-3 rounded light no-underline text-info4 " @click="$modal.show('login-modal', { route: '/dashboard/account' })">
        <span>Melde dich an</span>
        <ArrowRightIcon />
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { ArrowRightIcon } from 'vue-feather-icons'
import { FeatherIcon } from 'vue-feather-icons'
import { ClipboardIcon } from 'vue-feather-icons'
import { TrelloIcon } from 'vue-feather-icons'

const fb = require('~/services/firebaseConfig.js')
export default {
  components: { ArrowRightIcon, FeatherIcon, ClipboardIcon, TrelloIcon },
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
    },
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>
