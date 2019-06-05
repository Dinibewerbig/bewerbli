<template>
  <div>
    <header :class="{'headroom--unpinned': scrolled}" class="headroom header" @hover="handleScroll">
      <Navbar :scrolled="scrolled" />
    </header>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      limitPosition: 10,
      scrolled: false,
      lastPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = false
        // move down
      }

      this.lastPosition = window.scrollY
      this.scrolled = window.scrollY > 10
    }
  }
}
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.header {
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 10000;
}

.headroom {
  will-change: transform;
  transition: all 100ms linear;
  // background-color: #fafafd;
}
.headroom--pinned {
  background-color: #fafafdbb;
}
.headroom--unpinned {
  padding-top: 10px;
  transform: translateY(-32%);
  background-color: #fafafd;
  border-bottom: #cbd0d3bb solid 0.5px;
}
</style>
