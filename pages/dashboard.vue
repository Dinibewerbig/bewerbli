<template>
  <div class="noScroll bg-elabackground w-full relative">
    <div class="flex flex-1">
      <!--Sidebar-->
      <aside
        id="sidebar"
        :class="{sidebar : sidebar }"
        class="bg-elasidebar border-r sidebar1"
      >
        <sidebarOpen v-if="!sidebar" />
        <sidebarClosed v-else />
      </aside>
      <!--Screen-->
      <div class="min-h-screen min-w-screen flex w-full">
        <!--Header Section Starts Here-->
        <!-- <header
          :class="{headerToggle: sidebar }"
          class="bg-white header h-16 w-full flex borderbottom"
        >
          <div class="flex w-full justify-end">
          <div class="p-1 mx-3 items-center inline-flex">
              <font-awesome-icon
                style="font-size: 20px; color: grey"
                :icon="['fas', 'bars']"
                @click="toggleSidebar"
              />
            </div> 
      </div>
      </header>-->

        <!--Main-->
        <main :class="{main : sidebar }" class="bg-elabackground pt-3 w-full overflow-hidden">
          <vue-custom-scrollbar class="scroll-area w-full" :settings="settings">
            <nuxt-child :key="$router.fullPath" class="w9 mx-auto " />
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
import sidebarOpen from '~/components/sidebarOpen'
import sidebarClosed from '~/components/sidebarClosed'

import //   UserIcon,
//   MailIcon,
//   EditIcon,
//   ShoppingCartIcon
'vue-feather-icons'

const fb = require('~/services/firebaseConfig.js')
export default {
  components: {
    vueCustomScrollbar,
    sidebarOpen,
    sidebarClosed
    // UserIcon,
    // MailIcon,
    // EditIcon,
    // ShoppingCartIcon
  },
  layout: 'dashboard',
  data() {
    return {
      tog: false,
      noScrollY: false,
      settings: {
        maxScrollbarLength: 200,
        suppressScrollX: true,
        suppressScrollY: false,
        minScrollbarLength: 100
      }
    }
  },
  watch: {
    $route: function() {
      console.log('route changed')
      if (this.$nuxt.$route.name === 'dashboard-editor') {
        this.settings.suppressScrollY = true
      } else {
        this.settings.suppressScrollY = false
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
    setTimeout(() => {
      if (this.$nuxt.$route.name === 'dashboard-editor') {
        this.settings.suppressScrollY = true
      } else {
        this.settings.suppressScrollY = false
      }
    }, 5)
  },
  computed: {
    ...mapState([
      'userProfile',
      'currentUser',
      'posts',
      'answers',
      'hiddenPosts',
      'sidebar'
    ])
  },
  methods: {
    user() {
      console.log(this.userProfile)
    },
    onResize() {
      if (window.innerWidth < 1130) {
        this.$store.commit('sidebarTrue')
      } else {
        this.$store.commit('sidebarFalse')
      }
    },
    toggleSidebar() {
      this.$store.commit('toggleSidebar')
      this.$bus.$emit('toggleSidebar', this.sidebar)
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
  width: 48px !important;
}
.sidebar1 {
  width: 190px;
}

.header {
  width: calc(100vw - 173px);
}
.headerToggle {
  width: calc(100vw - 39px);
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
  width: 97%;
}
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 80px) !important;
}
</style>
