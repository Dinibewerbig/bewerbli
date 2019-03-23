<template>
  <div class="form-layout">
    <div class="wrapper">
      <ul class="bg-bubbles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>


<style scoped lang="scss" >
.form-layout {
  overflow: hidden !important;
}
.wrapper {
  box-sizing: content-box;
  background: linear-gradient(to bottom right, #50a3a2 0%, #8b1dad 100%);
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden !important;
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  /* background-color: fade(white, 15%); */
  bottom: -140px;
  opacity: 0;
  -webkit-animation: fadein 12s infinite, square 24s infinite,
    fadeout 12s 12s infinite;
  animation: fadein 12s infinite, square 24s infinite, fadeout 12s 12s infinite;
  transition-timing-function: linear;
  z-index: 1;
}

@for $i from 1 through 15 {
  .bg-bubbles li:nth-child(#{$i}) {
    $dimension: (random(10) * 12px);
    left: (random(1000) * 0.1%);
    width: $dimension;
    height: $dimension;
    transition: background-color 10s;
    animation-delay: (random(1000) * -0.05s);
    -webkit-animation-delay: (random(1000) * -0.05s);
    animation-duration: (random(3) * 30s);
    -webkit-animation-duration: (random(3) * 30s);
    background-color: rgba(255, 255, 255, 0.2);
  }
}

@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-1500px) rotate(600deg);
    transform: translateY(-1500px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-1000px) rotate(600deg);
    transform: translateY(-1000px) rotate(600deg);
  }
}
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Firefox < 16 */
@-webkit-keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
/* Firefox < 16 */
</style>
