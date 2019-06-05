<template>
  <div>
    <hooper
      :key="componentKey"
      ref="carousel"
      :mouse-drag="false"
      class="slides"
      @slide="updateSlide"
    >
      <!-- <hooper-pagination slot="hooper-addons" mode="fraction" /> -->
      <slide v-for="(step, i) in steps" :key="i+1" class="form__slide ">
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
      <hooper-pagination slot="hooper-addons" />
      <hooper-pagination slot="hooper-addons" />
      <hooper-progress slot="hooper-addons" />
    </hooper>
    <div class="nav flex flex-row-reverse">
      <button class="btn" :class="{disabled: activeSlide > 16}" @click.prevent="slideNext">
        <h3>Weiter zu Frage {{ activeSlide +1 }}</h3>
      </button>
      <button class="btn" :class="{disabled: activeSlide === 0}" @click.prevent="slidePrev">
        <font-awesome-icon
          :icon="['fas', 'arrow-left']"
          style="color: rgb(55, 41, 136); font-size: 20px;"
        />
        <span class>
          Zurück
        </span>
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
.slides {
  padding-top: 30px;
  height: 600px;
}
:focus {
  outline: none !important;
}
.nav {
  position: relative;
  width: 100%;
  bottom: 6rem;
}

.disabled {
  visibility: hidden;
}

button:disabled {
  visibility: hidden;
}
</style>
