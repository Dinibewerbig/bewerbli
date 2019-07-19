<template>
  <div>
    <div class="go to store">
      <div class="border-bottom pb-6 mb-6">
        <h2 class="font-normal text-white">
          Store
        </h2>
      </div>

      <div class="flex">
        <div class="pr-10">
          <div
            class="text-white"
          >
            Hier geht es zum Store. 
          </div>
        </div>
      </div>
  
      <div class="flex flex-col">
        <nuxt-link to="/store" class=" p-3 rounded light no-underline text-info3 " @click.native="clicked">
          <ShoppingCartIcon />
          <span>Store</span>
          <ArrowRightIcon />
        </nuxt-link>
      </div>
    </div><div class="go to fragebogen">
      <div class="flex">
        <div class="pr-10">
          <div
            class="text-white"
          >
            Hier geht es zum Fragebogen. 
          </div>
        </div>
      </div>
  
      <div class="flex flex-col">
        <nuxt-link to="/fragebogen/anmeldung" class=" p-3 rounded light no-underline text-info1 " @click.native="clicked">
          <span>Fragebogen</span>
          <ArrowRightIcon />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { ArrowRightIcon, ShoppingCartIcon } from 'vue-feather-icons'

const fb = require('~/services/firebaseConfig.js')
export default {
  components: { ArrowRightIcon, ShoppingCartIcon },
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
