<template>
  <div ref="container" class="container-lg">
    <div class="pt-4 flex items-center w-full">
      <nuxt-link class="ml-auto no-underline" to="/">
        Zurück
      </nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>


<style scoped>
.container-lg {
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1070px;
}
</style>
