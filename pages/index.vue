<template>
  <div>
    <div class="forms-hero bg-purple h-screen">
      <div class="bg-batch-gradient h-screen">
        <div class="container">
          <div class=" h-full items-center text-center w-full">
            <div class=" pt-24">
              <div class=" text-center ">
                <div class=" mt-8 relative text-center z-50 ">
                  <div class="w-5/5 header mx-auto fade-in-up text-7xl text-white font-semibold gilroy leading-tight  ">
                    Der intelligente Schreibservice
                  </div>
                  
                
                  <div class="text-3xl mx-auto  w-full text-white avenir font-medium  leading-normal mt-12">
                    Erstelle dein Bewerbungsdossier in Minuten 
                  </div>
                  <!-- <div class="text-3xl mx-auto  w-5/6 text-white avenir font-medium  leading-normal ">
                    für die nächste Generation
                  </div> -->
                </div>
                 
                 
                <div class="w-full   ">
                  <div class=" mx-auto  relative">
                    <div class=" mt-4 -ml-16 pr-4">
                      <img src="~/assets/heroimage.svg" class="hero">
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class=" relative  ">
                <div class="hero-input items-center flex fade-in-up ">
                  <div class="hero-input-email-icon">
                    <img src="~/assets/envelope-chevron.svg">
                  </div>
                  <div class="hero-input-text">
                    bewerbli.ch
                  </div>
                  <div class="hero-input-cursor blink" />
                  <img src="~/assets/ribbon.svg" class="icon-ribbon">
                </div>
              </div> -->
              <!-- <div class=" fade-in-up mt-12">
                <nuxt-link to="/fragebogen/anmeldung" class="big-purple-button">
                  Jetzt ausprobieren
                </nuxt-link>
              </div> -->
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
    
  
    <div class="bg-primary-lightest2  ">
      <!-- <clearbit4 class="pt-32 " /> -->
      
      <titelblatt class="margin" />
      <anschreiben />
    
      <costumized />
      <machine />

      <editored />
      <personalized />
   
      <!-- <content1 class="border-top" /> -->
      <!-- <feature3 /> -->
      <!-- <feature6 class="mb-32 border-top" /> -->
      <!-- <pingping /> -->
      <!-- <collage class="bg-batch-gradient border-top" />
    
    
     
 
     
     
      <choices class="border-top" /> -->
      <featured />
      <!-- <prefooter /> -->
      <footer1 />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
// import Zondicon from 'vue-zondicons'
// import clearbit4 from '~/components/clearbit4'
// import feature6 from '~/components/Feature6'
// import pingping from '~/components/pingping'
// import choices from '~/components/choices'
// import prefooter from '~/components/prefooter'

import editored from '~/components/editored'
import featured from '~/components/featured'
// import feature3 from '~/components/Feature3'
import anschreiben from '~/components/anschreiben'
import titelblatt from '~/components/Titelblatt'

import costumized from '~/components/costumized'
import machine from '~/components/machine'
import personalized from '~/components/personalized'

// import collage from '~/components/collage'

import footer1 from '~/components/footer'

export default {
  layout: 'default',
  components: {
    featured,
    titelblatt,
    personalized,
    // feature6,
    // feature3,
    anschreiben,
    costumized,
    machine,
    // pingping,
    // collage,
    footer1,
    // prefooter,
    // choices,
    editored
    // clearbit4,
  }
}
</script>

<style scoped lang="scss">
.header {
  font-size: 3.4rem;
}
.hero {
  width: 94%;
}
.margin {
  margin-top: 320px;
}

.btn-hero {
  transition: 0.2s background-color, 0.2s transform, 0.2s opacity;
}
.btn-white {
  border-color: rgb(255, 255, 255);
  transition: 0.2s background-color, 0.2s transform, 0.2s opacity;
  @apply bg-transparent text-white font-semibold text-base py-4 px-6 border border-white  rounded;
}

.btn-hero:hover {
  opacity: 0.8;
  -webkit-transform: translateY(-0.188rem);
  // -moz-transform: translateY(-0.188rem);
  // -o-transform: translateY(-0.188rem);
  // -ms-transform: translateY(-0.188rem);
  transform: translateY(-0.188rem);
}

// .purple-gradient {
//   background-image: -webkit-linear-gradient(
//     150deg,
//     rgba(103, 77, 153, 0) 30%,
//     #924ea9 65%,
//     #844b98
//   );
//   background-image: -moz-linear-gradient(
//     150deg,
//     rgba(103, 77, 153, 0) 30%,
//     #924ea9 65%,
//     #844b98
//   );
//   background-image: -ms-linear-gradient(
//     150deg,
//     rgba(103, 77, 153, 0) 30%,
//     #924ea9 65%,
//     #844b98
//   );
//   background-image: -o-linear-gradient(
//     150deg,
//     rgba(103, 77, 153, 0) 30%,
//     #924ea9 65%,
//     #844b98
//   );
//   background-image: linear-gradient(
//     150deg,
//     rgba(103, 77, 153, 0) 30%,
//     #924ea9 65%,
//     #844b98
//   );
// }

.bg-batch-gradient {
  background: url(~assets/bgimage2.jpg) center center no-repeat;
  background-size: cover;

  // background-image: linear-gradient(336deg, #9684bf, #415f92);
}

// .bg-purple {
//   height: 100vh;
//   background-color: #334274;
// }

.fade-in-up.td1,
.fade-in-down.td1 {
  transition-delay: 0.2s;
}

.no-delay .fade-in-up,
.no-delay .fade-in-down {
  transition-delay: 0s;
}

.fade-in-up.long,
.fade-in-down.long {
  transition: 1s opacity, 1s transform;
}

.loaded .fade-in-up,
.loaded .fade-in-down {
  opacity: 1;
  transform: none;
}
.fade-in-up {
  transform: translateY(40px);
}
.fade-in-up,
.fade-in-down {
  opacity: 1;
  transition: 1s opacity, 1s transform;
}

.fade-in-up.td4,
.fade-in-down.td4 {
  transition-delay: 0.8s;
}
.fade-in-up.long,
.fade-in-down.long {
  transition: 1s opacity, 1s transform;
}

.fade-in-up.long,
.fade-in-down.long {
  transition: 1s opacity, 1s transform;
}
.hero-input {
  z-index: 3;
  position: relative;
  text-align: left;
  max-width: 400px;
  padding: 8px 20px;
  border-radius: 11px;
  box-shadow: 0 14px 26px 0 rgba(30, 38, 60, 0.26),
    0 7px 19px 0 rgba(51, 43, 77, 0.52);
  background-color: #fff;
  border: solid 3px #eae9ff;
  color: #6d728a;
  font-weight: 500;
  font-size: 26px;
}
.blink {
  animation: 1s blink-animation step-end infinite;
}
.hero-input-cursor {
  position: relative;
  top: 1px;
  margin-left: 3px;
  width: 3px;
  border-radius: 3px;
  background-color: #3386ee;
  height: 30px;
}
.hero-input .icon-ribbon {
  position: absolute;
  top: -12px;
  right: 20px;
  height: 72px;
}
.big-purple-button {
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.1px;
  color: #fff;
  text-decoration: none;
  padding: 12px 40px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #9f80d5;
  box-shadow: 0 -1px 0px rgba(255, 255, 255, 0.5),
    0 7px 13px 0 rgba(84, 52, 112, 0.85);
  display: inline-block;
  transition: 0.2s background, 0.2s box-shadow, 0.3s transform;
  text-shadow: 0px -1px 0px rgba(84, 52, 112, 0.3);
}

.hero-data-points {
  z-index: 1;
  display: inline-flex;
  margin-top: -10px;
}

.hero-input-email-icon {
  padding: 6px 4px 4px 4px;
}
.hero-input-email-icon {
  height: 24px;
  margin-right: 20px;
  margin-left: -10px;
  border-radius: 4px;
  padding: 4px;
  background-image: linear-gradient(160deg, #8eb6ff, #b890c8);
  box-shadow: 0 2px 6px 0 rgba(27, 24, 46, 0.16);
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
</style>
