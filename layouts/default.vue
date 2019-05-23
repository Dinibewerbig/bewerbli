<template>
  <div class="layout ">
    <Header class="table" />
    
    <nuxt />
    <loginModal />
  </div>
</template>



<script>
import Header from '~/components/Header.vue'
import loginModal from '~/components/LoginModal.vue'
export default {
  components: {
    Header,
    loginModal
  }
}
</script>



<style scoped>
.layout {
  /* background-color: rgb(37, 37, 37); */
  width: 100%;
  height: 100%;
  z-index: -10000;
  /* background-image: linear-gradient(#fff, #f5f5fa); */
}
</style>
