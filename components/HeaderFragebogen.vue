<template>
  <div>
    <header :class="{'headroom--unpinned': scrolled}" class="headroom header" @hover="handleScroll">
      <nuxt-link to="/form/form">Zurück</nuxt-link>
    </header>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.header {
  width: 100%;
  height: 75px;
  position: fixed;
  z-index: 1;
}

.headroom {
  will-change: transform;
  transition: all 250ms linear;
  // background-color: #ffffff6c;
  // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);
}
.headroom--pinned {
  transform: translateY(0%);
  // background-image: 0;
  background-color: #ffffff;
}
.headroom--unpinned {
  padding-top: 8px;
  transform: translateY(-27%);
  // background-color: #455de4;
  background-color: #4d5270;
  // background-image: linear-gradient(45deg, #9d6cf7 0%, #260466 100%);
}
</style>
