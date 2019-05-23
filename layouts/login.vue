<template>
 
    <div class=" ">
      <nuxt />
     
      <loginModal />
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

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.iso {
}
</style>
