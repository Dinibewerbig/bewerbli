<template>
  <ul class="list-reset  flex flex-col">
    <li class="h-16 flex">
      <!-- <transition mode="out-in"> -->

      <img class="w-38 px-3 mx-auto " src="~/assets/cypher2.svg" @click="$router.push('/')">
    </li>
    <li class="w-full">
      <div
        class="h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <span class="ml-1 font-medium capitalize text-icon">
          <!-- <img
            v-if="currentUser"
            src="https://secure.gravatar.com/avatar/89a1f952b925a3c377fd9fd0ade70f7d?s=35&r=g&d=identicon"
            alt="avatar"
            width="35"
            height="35"
            class="rounded-full"
          > -->
          Willkommen, {{ userProfile.name }}
        </span>
      </div>
    </li>
  
    <li class="w-full">
      <nuxt-link
        to="/dashboard/dashboard"
        class="h-full py-3 hover:no-underline px-6 mt-4 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'archive']"
        />
        <span class="ml-1  font-medium text-icon uppercase ">
          Dashboard
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/bestellungen"
        class="h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'receipt']"
        />
        <span class="ml-1 uppercase font-medium text-icon">
          Bestellungen
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/fragebogen/dokumente"
        class="h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'file']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Dokumente
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/fragebogen/start/deckblatt"
        class="h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'shopping-cart']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Auswahl
        </span>
      </nuxt-link>
    </li>

    <li class="w-full">
      <nuxt-link
        to="/dashboard/fragebogen/fragebogen"
        class="w-full h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'paste']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Fragebögen
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/editor"
        class="w-full h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'feather']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Editor
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/scheduler"
        class="w-full h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'calendar']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Scheduler
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/bewerbungen"
        class="w-full h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'list']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Bewerbungen
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/aktivitaeten"
        class="w-full h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'calendar-check']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Aktivitäten
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/email/inbox"
        class="w-full h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'envelope']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Email
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/dashboard/account"
        class="h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'user']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Dein Konto
        </span>
      </nuxt-link>
    </li>
    <li class="w-full">
      <nuxt-link
        to="/index"
        class="h-full py-3 hover:no-underline px-6 hover:bg-elahighlight group flex items-center no-underline text-white hover:text-grey"
        @click.native="logout"
      >
        <font-awesome-icon
          class="text-icon mr-3"
          style="font-size: 20px;"
          :icon="['fas', 'sign-out-alt']"
        />
        <span class="ml-1 font-medium uppercase text-icon">
          Log out
        </span>
      </nuxt-link>
    </li>
   



   
    </div>
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
