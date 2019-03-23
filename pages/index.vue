<template>
  <div>
    <div style="position: relative; z-index: 0; ">
      <parallax :speed-factor="0.3">
        <div class="hero">
          <div style=" z-index: 0;" class="container-lg flex relative h-full align-center justify-center">
            <div class="container1 mt-24 ">
              <div class="title text-left">
                <h1 class="font-thin">
                  Den passenden Bewerbungsbrief
                  für deine Lehrstellensuche
                </h1>
              </div>

              <div class="mb-12">
                <h4>für Schüler und Schülerinnen der Sekundarstufe </br> oder des 10. Schuljahres</h4>
              </div>
            </div>
          </div>
          <div class="vorteile container-lg w-full">
            <ul class="flex flex-row justify-between ">
              <li><img src="~/assets/small-wall-clock.svg" style=" width:20px;">schnell</li>
              <li><img src="~/assets/price-tag.svg" style=" width:20px;">preisgünstig</li>
              <li>&nbsp; </li>
              <li>
                <img src="~/assets/mans-silhouette.svg" style=" width:20px;">persönlich
              </li>
              <li><img src="~/assets/loop-arrow.svg" style=" width:20px;">anpassbar</li>
            </ul>
          </div>
          <div style="" class="vorteile w-full " />
        </div>
      </parallax>
    </div>
    
    <section style="top: 0px; left: 0px;  position: absolute; height: 100%; width: 100%; " class="">
      <div class="w-full text-center  m-b:10px; ">
        <a
          v-scroll-to="{
            el: '#element',
                
            duration: 700,
            easing: 'ease-out',
            offset: -62,
            force: true,
            cancelable: true,
            onStart: onStart,
            onDone: onDone,
            onCancel: onCancel,
            x: false,
            y: true
          }"
          class="floating-arrow"
          href="#"
        >
          <img src="~/assets/scroll-arrow-to-down.svg" style=" width:35px;" alt="very cool bg">
        </a>
      </div>
    </section>

    <feature3 id="element" />
    <feature1 />
    <feature4 />
    <feature2 />
    <feature5 />
    <feature6 />
    <pricing1 /> 
    <pricing2 /> 
    <footer1 />
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import feature1 from '~/components/Feature1'
import feature2 from '~/components/Feature2'
import feature3 from '~/components/Feature3'
import feature4 from '~/components/feature4'
import feature5 from '~/components/Feature5'
import feature6 from '~/components/Feature6'
import pricing1 from '~/components/Pricing'
import pricing2 from '~/components/Pricing2'
import footer1 from '~/components/Footer'

export default {
  layout: 'default',
  components: {
    Parallax,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    footer1,
    pricing1,
    pricing2
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
  padding: 1em;
  box-sizing: border-box;
  color: white;
  background: url(~assets/header86.png) center center no-repeat;
  background-size: cover;
}

// .bg {
//   background-image: radial-gradient(
//     ellipse at center -50%,
//     #18334f 0%,
//     #18334f 18%,
//     #192532 57%,
//     #192532 100%
//   );
// }

.floating-arrow {
  left: 0;
  line-height: 1px;
  padding: 0 20px;
  position: absolute;
  bottom: 5vh;
  width: 100%;
  z-index: 0;
  color: #fff;
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

.container1 {
  width: 60%;
}

.container1 h1 {
  font-size: 40px;
  transition-duration: 1s;
  transition-timing-function: ease-in-put;
  font-weight: 800;
  color: #ffffff;
  // font-family: Hind;
  font-family: Myriad Pro;
  // font-family: Camphor;
  // font-family: system-ui;
  // letter-spacing: 0.05em;
  // font-family: Avenir;
  // font-family: Montserrat;
  margin-bottom: 20px;
  line-height: 1.3em !important;
  letter-spacing: -0.01em;
  // font-weight: 300;
}

.container1 h1 > span {
  font-family: Avenir Next;
}

h4 {
  color: #cacacadc;
  font-family: Myriad Pro;
  line-height: 2.3rem !important;
  font-weight: 400;
  font-size: 1.7rem;
  // -webkit-font-smoothing: antialiased;
}

.container-lg {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin: 0 auto;
  max-width: 1070px;
}
</style>
