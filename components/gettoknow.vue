<template>
  <div class="container component-grid">
    <div class="section-figure__shape">
      <img
        src="~/assets/bg-graph-gettingtoknowyou.svg"
        alt="getting to know you"
        class="section-figure__image"
      >
      <div class="section-figure__animation shapeshifter shapeshifter_play" />
      <div class="section-figure__people">
        <img
          src="~/assets/img-user-3.cf1b11d.png"
          alt="getting to know you people 3"
          class="section-figure__people_img section-figure__people_img-3"
        >
        <img
        
          src="~/assets/img-user-2.6f7ff99.png"
          alt="getting to know you people 2"
          class="section-figure__people_img section-figure__people_img-2"
        >
        <img
        
          src="~/assets/img-user-1.8a7853c.png"
          alt="getting to know you people 1"
          class="section-figure__people_img section-figure__people_img-1"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section_activated .shapeshifter .shapeshifter_play {
  -webkit-animation-name: AnimationAxis;
  animation-name: AnimationAxis;
}

.section-figure__image {
  display: block;
  margin: 0 auto;
}

img {
  border-style: none;
}

.shapeshifter {
  -webkit-animation-duration: 7s;
  animation-duration: 7s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps(210);
  animation-timing-function: steps(210);
  width: 379px;
  height: 379px;
  background-image: url(~assets/animation-axis.svg);
  background-repeat: no-repeat;
}

// div {
//   display: block;
// }

// .section-figure {
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: row;
//   flex-direction: row;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
// }

// .component-grid {
//   /* display: -webkit-box; */
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   /* -webkit-box-direction: normal; */
//   -ms-flex-direction: column;
//   flex-direction: column;
//   /* text-align: center; */
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   width: 90%;
//   margin: 0 auto;
// }

// .section-figure {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//   flex-direction: column;
// }
.section-figure__animation {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -189.5px;
  margin-left: -189.5px;
}

.section-figure__people {
  position: absolute;
  width: 96px;
  height: 96px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.section-figure__people_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.section_activated .section-figure__people_img-3 {
  opacity: 0;
  -webkit-animation: FadeOutC 7s infinite normal ease-in-out;
  animation: FadeOutC infinite normal ease-in-out;
}

.section_activated .section-figure__people_img-2 {
  opacity: 0;
  -webkit-animation: FadeOutB 7s infinite normal ease-in-out;
  animation: FadeOutB 7s infinite normal ease-in-out;
}
.section_activated .section-figure__people_img-1 {
  opacity: 1;
  -webkit-animation: FadeOutA 7s infinite normal ease-in-out;
  animation: FadeOutA 7s infinite normal ease-in-out;
}

@keyframes FadeOutA {
  0% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  20% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes FadeOutB {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  45% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes FadeOutC {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes AnimationAxis {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -79590px 0;
  }
}
</style>
