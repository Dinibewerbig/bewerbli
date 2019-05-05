<template>
  <div class="bg-primary-lightest text-base text-grey-darkest font-normal relative">
    <div class="bg-primary h-2" />

    <div id="application" class="min-h-screen flex flex-col">
      <nav class="w-full max-w-screen mx-auto px-4">
        <div class="flex mt-6 py-3 border-b border-grey">
          <div class="flex flex-1">
            <img class="logoImg" src="~/assets/newlogo2.svg" @click="$router.push('/')">
            <span id="release-notes">
              <span id="HW_badge_cont" class="HW_visible">
                <span id="HW_badge" data-count-unseen class="HW_softHidden" />
              </span>
            </span>
          </div>
          <div class="flex justify-between items-center">
            <ul class="list-reset flex">
              <li>
                <nuxt-link
                  to="/dashboard/bestellungen/laufend"
                  class="flex items-center no-underline text-grey-darker group hover:text-black"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current w-6 h-6 mr-2 group-hover:text-primary text-grey-dark"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                    />
                  </svg>
                  <span class="font-bold text-black">
                    Bestellungen
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/dashboard/fragebogen"
                  class="flex items-center no-underline text-grey-darker group hover:text-black ml-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current w-6 h-6 mr-2 group-hover:text-primary text-primary"
                  >
                    <path
                      d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                  <span>Fragebögen</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/dashboard/account"
                  class="flex items-center no-underline text-grey-darker group hover:text-black ml-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current w-6 h-6 mr-2 group-hover:text-primary text-grey-dark"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                  <span>Account</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/dashboard/kontakt"
                  class="flex items-center no-underline text-grey-darker group hover:text-black ml-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current w-6 h-6 mr-2 group-hover:text-primary text-grey-dark"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                    />
                  </svg>
                  <span>Kontakt</span>
                </nuxt-link>
              </li>
            </ul>
            <div class="flex items-center ml-6 pl-6 border-l border-grey">
              <!-- <img
                v-if="!currentUser"
                src="https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&r=g&d=identicon"
                alt="avatar"
                width="35"
                height="35"
                class="rounded-full"
              > -->
              <img
                v-if="currentUser"
                alt="avatar"
                :src="currentUser.photoURL"
                width="35"
                height="35"
                class="rounded-full"
              >
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
          </div>
        </div>
      </nav>
      <nuxt-child :key="$router.fullPath" />
    </div>
    <div class="flash text-white bg-success" style="display: none;" />
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

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
</style>
