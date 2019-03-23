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
  height: 85px;
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
  transform: translateY(-25%);
  // background-color: #455de4;
  background-color: #2c3061;

  // background-image: linear-gradient(45deg, #9d6cf7 0%, #260466 100%);
}
</style>
