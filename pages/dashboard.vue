<template>
  <div class="noScroll bg-elabackground">
    <div class="flex flex-1">
      <!--Sidebar-->
      <aside
        id="sidebar"
        :class="{sidebar : sidebar }"
        class="bg-elasidebar w-1/2 md:w-1/4 lg:w-1/5 border-r border-side-nav hidden md:block lg:block"
      >
        <ul class="list-reset items-center flex flex-col">
          <li class="h-16 flex">
            <!-- <transition mode="out-in"> -->

            <img class="w-48 -ml-4" src="~/assets/logoo2.svg" @click="$router.push('/')">
          </li>
          <li class="w-full">
            <nuxt-link
              to="/dashboard/dashboard"
              class="h-full py-4 px-12 mt-4 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
            >
              <font-awesome-icon
                class="text-icon mr-3"
                style="font-size: 20px;"
                :icon="['fas', 'home']"
              />
              <span class="ml-1 font-normal">
                Dashboard
              </span>
            </nuxt-link>
          </li>
          <li class="w-full">
            <nuxt-link
              to="/dashboard/bestellungen"
              class="h-full py-4 px-12 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
            >
              <font-awesome-icon
                class="text-icon mr-3"
                style="font-size: 20px;"
                :icon="['fas', 'home']"
              />
              <span class="ml-1 font-normal">
                Bestellungen
              </span>
            </nuxt-link>
          </li>
          <li class="w-full">
            <nuxt-link
              to="/dashboard/fragebogen/dokumente"
              class="h-full py-4 px-12 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
            >
              <font-awesome-icon
                class="text-icon mr-3"
                style="font-size: 20px;"
                :icon="['fas', 'home']"
              />
              <span class="ml-1 font-normal">
                Dokumente
              </span>
            </nuxt-link>
          </li>
          <li class="w-full">
            <nuxt-link
              to="/dashboard/fragebogen/start/deckblatt"
              class="h-full py-4 px-12 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
            >
              <font-awesome-icon
                class="text-icon mr-3"
                style="font-size: 20px;"
                :icon="['fas', 'home']"
              />
              <span class="ml-1 font-normal">
                Auswahl
              </span>
            </nuxt-link>
          </li>

          <li class="w-full">
            <nuxt-link
              to="/dashboard/fragebogen/fragebogen"
              class="w-full h-full py-4 px-12 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
            >
              <font-awesome-icon
                class="text-icon mr-3"
                style="font-size: 20px;"
                :icon="['fas', 'home']"
              />
              <span class="ml-1 font-normal">
                zeige fragebogen
              </span>
            </nuxt-link>
          </li>
          <li class="w-full">
            <nuxt-link
              to="/dashboard/editor"
              class="w-full h-full py-4 px-12 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
            >
              <font-awesome-icon
                class="text-icon mr-3"
                style="font-size: 20px;"
                :icon="['fas', 'home']"
              />
              <span class="ml-1 font-normal">
                Editor
              </span>
            </nuxt-link>
          </li>
          <li class="w-full">
            <nuxt-link
              to="/dashboard/account"
              class="h-full py-4 px-12 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
            >
              <font-awesome-icon
                class="text-icon mr-3"
                style="font-size: 20px;"
                :icon="['fas', 'home']"
              />
              <span class="ml-1 font-normal">
                Dein Konto
              </span>
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <!--Screen-->
      <div class="min-h-screen flex flex-col w-full">
        <!--Header Section Starts Here-->
        <header :class="{headerToggle: sidebar }" class="bg-white header  h-16 w-full flex borderbottom">
          <div class="flex w-full justify-between">
            <div class="p-1 mx-3 items-center inline-flex">
              <font-awesome-icon style="font-size: 20px; color: grey" :icon="['fas', 'bars']" @click="toggleSidebar" />
            </div>
            <div class="flex items-center mr-12 ml-6 pl-6 border-l border-grey">
              <!-- <img
                v-if="!currentUser"
                src="https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&r=g&d=identicon"
                alt="avatar"
                width="35"
                height="35"
                class="rounded-full"
              >-->
              <img
                v-if="currentUser"
                alt="avatar"
                :src="currentUser.photoURL"
                width="35"
                height="35"
                class="rounded-full"
              >
              <div class="ml-3 flex-1">
                <div class="text-black text-sm lowercase leading-tight">
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
        </header>
        <!--/Header-->

        <!--/Sidebar-->
        <!--Main-->
        <main class="bg-elabackground flex-1 p-3 overflow-hidden">
          <vue-custom-scrollbar class="scroll-area" :settings="settings">
            <nuxt-child :key="$router.fullPath" class="w9 mx-auto" />
          </vue-custom-scrollbar>
          <!--/Grid Form-->
        </main>
        <!--/Main-->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import vueCustomScrollbar from 'vue-custom-scrollbar'

import //   UserIcon,
//   MailIcon,
//   EditIcon,
//   ShoppingCartIcon
'vue-feather-icons'

const fb = require('~/services/firebaseConfig.js')
export default {
  components: {
    vueCustomScrollbar
    // UserIcon,
    // MailIcon,
    // EditIcon,
    // ShoppingCartIcon
  },
  layout: 'dashboard',
  data() {
    return {
      sidebar: true,
      settings: {
        maxScrollbarLength: 200,
        suppressScrollX: true,
        minScrollbarLength: 100
      }
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
    toggleSidebar() {
      console.log('toggle')
      this.sidebar = !this.sidebar
      this.$bus.$emit('toggle')
    },
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


<style lang="scss" scoped>
.sidebar {
  display: none;
}

.header {
  width: calc(100vw - 200px);
}
.headerToggle {
  width: 100vw;
}
.noScroll {
  position: fixed;
}
* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.nuxt-link-active {
  background-color: #5457ff;
  font-weight: 500;
}
.w9 {
  width: 95%;
}
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 80px) !important;
}
</style>
