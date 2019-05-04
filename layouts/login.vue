<template>
  <div class="bg-primary-lightest">
    <div class="container-lg">
      <nuxt />
 
      <loginModal />
</div>
  </div>
</template>

<style scoped>
</style>

<script>
import loginModal from '~/components/LoginModal.vue'

export default {
  components: { loginModal },
  methods: {}
}
</script>
