<template>
  <ul class="list-reset items-center flex flex-col">
    <li class="h-16 flex">
      <!-- <transition mode="out-in"> -->

      <img class=" h-12  " src="~/assets/cyper.svg" @click="$router.push('/')">
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Start'"
        to="/dashboard/dashboard"
        class="h-full py-3 px-2 mt-4 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'archive']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Deine Bestellungen'"
        to="/dashboard/bestellungen"
        class="h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'receipt']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Deine Dokumente'"
        to="/dashboard/fragebogen/dokumente"
        class="h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'file']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Einkaufen'"
        to="/dashboard/fragebogen/start/deckblatt"
        class="h-full py-3 px-3  hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'shopping-cart']"
        />
      </nuxt-link>
    </li>

    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Fragebögen'"
        to="/dashboard/fragebogen/fragebogen"
        class="w-full h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'paste']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Texteditor'"
        to="/dashboard/editor"
        class="w-full h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'feather']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Scheduler'"
        to="/dashboard/scheduler"
        class="w-full h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'calendar']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Bewerbungen'"
        to="/dashboard/bewerbungen"
        class="w-full h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'list']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Aktivität'"
        to="/dashboard/aktivitaeten"
        class="w-full h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'calendar-check']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Dein Konto'"
        to="/dashboard/account"
        class="h-full py-3 px-3 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'user']"
        />
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        v-tooltip.right-start="'Logout'"
        to="/index"
        class="h-full py-3 px-3  hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
        @click.native="logout"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'sign-out-alt']"
        />
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
const fb = require('~/services/firebaseConfig.js')
export default {
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
</style>
