<template>
  <div class="wrapper bg-primary-lightest">
    <div class="container-lg">
      <nuxt />
    </div>
  </div>
</template>

<style scoped>
.container-lg {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1270px;
}
.bg-primary-lightest {
  background-color: #eff3f6;
}

h3 {
  color: #fff;
}
</style>
