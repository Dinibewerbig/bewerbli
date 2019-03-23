<template>
  <div class="wrapper">
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
  max-width: 1070px;
}
.wrapper {
  background: linear-gradient(302deg, #060f2c, #3e3a6b);
  min-height: 100vh;
}
h3 {
  color: #fff;
}
</style>
