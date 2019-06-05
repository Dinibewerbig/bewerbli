<template>
  <div class=" mx-auto w-full  m-4 text-base text-grey-darkest font-normal container">
    <div class="min-h-screen flex flex-col">
      <nav class="w-full  mx-auto px-4">
        <div class="flex mt-6 py-3 border-b border-grey">
          <div class="flex flex-1">
            <img class="iso w-8" src="~/assets/iso.svg" @click="$router.push('/')">
           
            </span>
          </div>
          <div class="flex justify-between items-center">
            <ul class="list-reset  flex">
              <li>
                <nuxt-link
                  to="/dashboard/bestellungen"
                  class="flex items-center no-underline text-grey-darker group hover:text-info4"
                >
                  <ShoppingCartIcon class="text-2xl" />
                  <span class="ml-1 ">
                    Bestellungen
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/dashboard/fragebogen/dokumente"
                  class="flex items-center no-underline text-grey-darker group hover:text-info4 ml-10"
                >
                  <EditIcon class="text-2xl" />
                  <span class="ml-1">
                    Dokumente
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/dashboard/fragebogen/auswahl"
                  class="flex items-center no-underline text-grey-darker group hover:text-info4 ml-10"
                >
                  <EditIcon class="text-2xl" />
                  <span class="ml-1">
                    Fragebögen
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/dashboard/account"
                  class="flex items-center no-underline text-grey-darker group hover:text-info4 ml-10"
                >
                  <UserIcon class="text-2xl" />
                  <span class="ml-1">
                    Benutzerdaten
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/dashboard/kontakt"
                  class="flex items-center no-underline text-grey-darker group hover:text-info4 ml-10"
                >
                  <MailIcon class="text-2xl " />
                  <span class="ml-1">
                    Kontakt
                  </span>
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
                <div class="text-black text-sm  leading-tight">
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
      <nuxt-child :key="$router.fullPath" class="" />
    </div>
    <div class="flash text-white bg-success" style="display: none;" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import {
  UserIcon,
  MailIcon,
  EditIcon,
  ShoppingCartIcon
} from 'vue-feather-icons'

const fb = require('~/services/firebaseConfig.js')
export default {
  components: {
    UserIcon,
    MailIcon,
    EditIcon,
    ShoppingCartIcon
  },
  layout: 'dashboard',
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

.nuxt-link-active {
  color: #6aa4f8;
  font-weight: 500;
}
</style>
