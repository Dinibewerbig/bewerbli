<template>
  <div class=" ">
    <app-header />
    <nuxt />
   
    <loginModal />
  </div>
</template>

<style scoped>
</style>

<script>
import loginModal from '~/components/LoginModal.vue'
import loadGapi from '~/plugins/gapi-load'
import AppHeader from '~/components/app/header.vue'

export default {
  components: { loginModal, AppHeader },
  created: function() {
    // Set sign isClient for store
    this.$store.commit('SET_IS_CLIENT', !this.$isServer)

    // Load google API
    loadGapi(this.$store, !this.$isServer)
  },
  methods: {}
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
