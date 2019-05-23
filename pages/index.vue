<template>
  <div>
    <div
      v-rellax="{
        speed: -10,
      }"
    >
      <div class="hero">
        <div class="container-lg">
          <div class="flex flex-row h-full items-center w-full">
            <div class="w-3/5 mt-32 pt-32">
              <div class="pb-32">
                <h1 class="text-5xl font-medium pb-4">
                  Sich bewerben mit System
                </h1>
                <div class="w-12 h-2 bg-white -ml-4" />
                <div class="text-2xl font-normal w-5/6 pb-12 leading-normal mt-8">
                  Dein perfektes
                  Bewerbungsdossier dank dem intelligenten Fragebogen
                  von bewerbli.ch 
                  <span class="font-medium">
                    Schneller, einfacher
                    und 
                    günstiger.
                  </span>
                </div>
                <button class="btn-white flex items-center ">
                  <svg class="w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="21" height="38" viewBox="0 0 21 38">
                    <polygon fill-rule="evenodd" points="21 19 0 0 0 38" />
                  </svg>
                  <span class="ml-2 -mb-1">
                    Schau das Video
                  </span>
                </button>
           
                <!-- <div class="vorteile  w-full">
                  <ul class="flex flex-row justify-between ">
                    <li class="text-base">
                      <img src="~/assets/small-wall-clock.svg" style=" width:20px;">schnell
                    </li>
                    <li class="text-sm">
                      <img src="~/assets/price-tag.svg" style=" width:20px;">preisgünstig
                    </li>
                    
                    <li class="text-sm">
                      <img src="~/assets/mans-silhouette.svg" style=" width:20px;">persönlich
                    </li>
                    <li class="text-sm">
                      <img src="~/assets/loop-arrow.svg" style=" width:20px;">anpassbar
                    </li>
                  </ul>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="w-full text-center">
        <a
          v-scroll-to="{
            el: '#element',             
            duration: 700,
            easing: 'ease-out',
            offset: -62,
            force: true,
            cancelable: true,
            x: false,
            y: true
          }"
          class="floating-arrow"
          href="#"
        >
          <img src="~/assets/scroll-arrow-to-down.svg" style="width:35px; z-index: 100000;">
        </a>
      </div>-->
    </div>

    <div class="bg-primary-lightest2 relative">
      <viaduct />
      <feature6 class="pt-32 mb-32" />
      <pingping>
        <collage class="bg-batch-gradient" />
        <content1 />
        <feature3 />
        <div v-inview:animate="'fadeInLeft'">
          <feature6 />
        </div>
      </pingping>
      <clearbit />
      <clearbit3 />
      <choices />
      <footer1 />
    </div>
  </div>
</template>

<script>
// import Zondicon from 'vue-zondicons'
import feature6 from '~/components/Feature6'
import pingping from '~/components/pingping'
import choices from '~/components/choices'
import clearbit from '~/components/clearbit2'
import clearbit3 from '~/components/clearbit3'
import viaduct from '~/components/viaduct'

import feature3 from '~/components/Feature3'

import collage from '~/components/collage'

import footer1 from '~/components/footer'

export default {
  layout: 'default',
  components: {
    feature6,
    feature3,
    pingping,
    collage,
    footer1,
    choices,
    clearbit,
    clearbit3,
    viaduct
  }
}
</script>

<style scoped lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media screen and (max-height: 550px) {
  .vorteile {
    opacity: 0;
    transition: opacity 0.3s;
  }
}

.btn-white {
  transition: 0.2s background-color, 0.2s transform, 0.2s opacity;
  @apply bg-transparent text-white font-semibold text-base py-4 px-6 border border-white  rounded;
}

.btn-white:hover {
  opacity: 0.8;
  -webkit-transform: translateY(-0.188rem);
  -moz-transform: translateY(-0.188rem);
  -o-transform: translateY(-0.188rem);
  -ms-transform: translateY(-0.188rem);
  transform: translateY(-0.188rem);
  border-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.2);
}

// .title {
//   padding-left: 9px;
//   width: 35rem;
//   font-size: 2.9rem;
//   letter-spacing: 0.08rem;
//   // font-family: Graphik;
//   font-weight: 600;
//   line-height: 1.2em;
//   color: white;
//   // text-transform: uppercase;
//   color: rgb(74, 39, 114);
//   background-color: white;
// }
.wave {
  margin-top: -12rem;
}

.vorteile {
  position: relative;
  bottom: 3vh;
}

.vorteile > ul {
  padding-inline-start: 0 !important;
}
.vorteile > ul > li {
  color: rgb(255, 255, 255);
  align-content: space-between;
  text-decoration: none;
  list-style-type: none;
}
.color {
  color: #00fff9;
}

img {
  position: relative;
  bottom: -4px;
  margin-right: 10px;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  box-sizing: border-box;
  color: white;
  background: url(~assets/girlH9.png), url(~assets/headerE2.png);
  padding: 40px;
  background-size: 150vh, cover;
  background-position: 30vw 18vh, center;
  background-repeat: no-repeat, no-repeat;
}

// .content {
//   background: url(~assets/overlay.svg);

//   background-position: top -40px center;
//   background-repeat: no-repeat;
// }

// .bg-near-white-fade-up {
//   position: absolute;
//   bottom: 0;
//   height: 300px;
//   width: 100%;
//   background-image: linear-gradient(
//     to top,
//     #ececec 5%,
//     rgba(255, 255, 255, 0) 50%
//   );
// }

.bg-batch-gradient {
  background-image: linear-gradient(336deg, #9684bf, #415f92);
}

.floating-arrow {
  z-index: 100000;
  left: 0;
  line-height: 1px;
  padding: 0 20px;
  position: absolute;
  bottom: 15vh;
  width: 100%;
  animation: floating-arrow 1.6s infinite ease-in-out 0s;
  -webkit-animation: floating-arrow 1.6s infinite ease-in-out 0s;
}

@-webkit-keyframes floating-arrow {
  from {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  65% {
    -webkit-transform: translateY(11px);
    transform: translateY(11px);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes floating-arrow {
  from {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  65% {
    -webkit-transform: translateY(11px);
    transform: translateY(11px);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes floating-arrow {
  from {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  65% {
    -webkit-transform: translateY(11px);
    transform: translateY(11px);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.mbr-arrow--dark .mbr-arrow__link,
.mbr-arrow--dark .mbr-arrow__link:hover,
.mbr-arrow--dark .mbr-arrow__link:focus {
  color: #252525;
}
@media (max-width: 767px) {
  .mbr-arrow {
    bottom: 41px;
  }
}
@media (max-width: 320px) {
  .mbr-arrow {
    bottom: 21px;
    text-align: center;
  }
}
@media all and (device-width: 320px) and (device-height: 568px) and (orientation: portrait) {
  .mbr-arrow {
    bottom: 31px;
  }
}

#element {
  height: 700px;
}
.main {
  height: 1000px;
}

input {
  border: 1px solid #3b426c;
  height: 3rem;
  padding: 0.65rem;
  margin: 0 0 1.3rem;
  font-size: 1rem;
  box-sizing: border-box;
  transition: box-shadow 0.5s, border-color 0.3s ease-in-out;
  -webkit-appearance: none;
  box-shadow: none;
  border-radius: 0.25rem;
  color: #21304f;
}
.btn {
  // background-color: #9beec3;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 0px;
  color: #21304f;
}

.btn:hover {
  color: #6a7197;
}
.container-lg {
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1170px;
}
</style>
