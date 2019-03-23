<template>
  <div class="container-lg">
    <div class="pt-4 flex items-center w-full">
      <!-- <img src="~/assets/logo44.svg" style=" width:150px" class="mr-4" @click="$router.push('/')"> -->
      <h3 class="font-regular">
        Fragebogen Bewerbungsbrief
      </h3>

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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1070px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

h3 {
  color: rgb(55, 41, 136);
}
</style>
