<template>
  <div class="form__container mt-10">
    <hooper :key="componentKey" ref="carousel" :mouse-drag="false" class="form__slides" @slide="updateSlide">
      <hooper-pagination slot="hooper-addons" mode="fraction" />
      <slide v-for="(step, i) in steps" :key="i+1" class="form__slide">
        <div>
          <component
            :is="step.component"
            :id="step.id"
            ref="childComponent"
            :items="step.options"
            :fragen="step.frage"
            :active="activeSlide"
          />
        </div>
      </slide>

      <hooper-progress slot="hooper-addons" />
    </hooper>
    <div class="nav">
      <button class="btn btn--alt" :class="{disabled: activeSlide === 0}" @click.prevent="slidePrev">
        <font-awesome-icon
          :icon="['fas', 'arrow-left']"
          style="color: rgb(55, 41, 136); font-size: 20px;"
        />
        <span class="trial__btn-hint">
          activeSlide
          oder drücke Enter
        </span>
      </button>

      <button class="btn self-stretch" :class="{disabled: activeSlide > 16}" @click.prevent="slideNext">
        <h2>Weiter</h2>
      </button>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination
} from 'hooper'
import Form0 from '~/components/Form0.vue'
import Form1 from '~/components/Form1.vue'
import Form2 from '~/components/Form2.vue'
import Form3 from '~/components/Form3.vue'
import Form4 from '~/components/Form4.vue'
import 'hooper/dist/hooper.css'
import steps from '~/assets/steps.js'
export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    Form0,
    Form1,
    Form2,
    Form3,
    Form4
  },
  data() {
    return {
      activeSlide: null,
      steps: steps,
      componentKey: 0
    }
  },
  watch: {
    activeSlide: function() {
      this.$nextTick(function() {
        setTimeout(
          this.$refs.carousel.$children[this.activeSlide].setFocus,
          200
        )
        console.log('setFocus !!')
      })
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.componentKey += 1
    })
  },
  methods: {
    updateSlide(Slide) {
      const passedSlide = Slide.slideFrom
      this.$refs.childComponent[passedSlide].setValue(passedSlide)
      this.activeSlide = Slide.currentSlide
      console.log(passedSlide + '=passed Slide')
    },
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>

<style lang="scss" scoped>
.form__container {
  background-color: #fff;
  display: flex;
  min-height: 700px;
  width: 100%;
}
.form__slides {
  padding-top: 30px;
  height: 600px;
}
:focus {
  outline: none !important;
}
.nav {
  position: absolute;
  display: flex;
  vertical-align: baseline;
  width: 100%;
  bottom: 6rem;
}
.trial__btn-hint {
  position: absolute;
  top: 25px;
  left: 10px;
  display: block;
  text-align: left;
  margin: 20px 0 0 0px;
  font-family: 'BrandonText-RegularItalic', sans-serif;
  font-size: small;
  opacity: 1;
  color: rgb(110, 101, 190);
}
.btn--alt {
  width: 120px;
  background: 0 0;
  border: 1px solid rgb(55, 41, 136);
  color: rgb(31, 31, 31);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  vertical-align: top;
  border-radius: 6px;
  font-size: 0.88889rem;
  line-height: 1.75;
  padding: 0.45rem 1.8rem;
  font-family: 'BrandonText-Medium', sans-serif;
  outline: 0;
}

.disabled {
  visibility: hidden;
}

button:disabled {
  visibility: hidden;
}

button {
  position: relative;
  color: #ffffff;
  border-radius: 4px;
  width: 400px;
  transition-duration: 0.25s;
  margin: 0.3em;
  font-family: 'BrandonTextW01-Medium';
  border: 1px solid #fff;
  background-color: rgb(79, 68, 177);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 6px;
  font-size: 0.88889rem;
  line-height: 1.75;
  padding: 0.45rem 1.8rem;
  outline: 0;
}
</style>
