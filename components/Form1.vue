<template>
  <div>
    <h1 class="mb-12 font-light">
      {{ fragen }}
    </h1>
    <div>
      <button
        v-for="(item, index) in items"
        :id="'btn'+index"
        :key="index"
        :ref="index"
        class="animated faster w-48 mr-4 bg-transparent hover:bg-blue-lighter text-blue-dark py-2 px-4 border border-blue rounded"
        @click="clicked($event)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Form1',
  // eslint-disable-next-line vue/require-prop-types
  props: ['items', 'active', 'fragen'],
  data() {
    return {
      selected: [],
      id: null
    }
  },
  methods: {
    clicked(e) {
      const id = e.target.id
      const text = e.target.innerText
      const elem = document.getElementById(id)
      if (this.selected.includes(text)) {
        this.selected.splice(this.selected.indexOf(text))
        elem.classList.remove('flash')
      } else {
        this.selected.push(text)
        elem.classList.add('flash')
      }
    },
    setValue: function(activeSlide) {
      console.log('button pushed in form1 from active Slide ' + activeSlide)
    }

    // /* eslint-disable no-console */
    // console.log(this.active)
    // /* eslint-enable no-console */
  }
}
</script>

<style scoped lang="scss" >
.flash {
  border-width: 2px;
}

h2 {
  margin-bottom: 0px;
}
</style>
