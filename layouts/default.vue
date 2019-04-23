<template>
  <div class="layout bg-primary-lightest">
    <Header class="table" />
    <nuxt />
  </div>
</template>



<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
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
