<template>
  <div class="mx-4">
    <div class="flex-1  text-xl leading-normal tracking-wide text-black mx-8">
      <div
        class="tracking-normal text-4xl mb-12 font-light"
      >
        {{ fragen }}
      </div>
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
      <textarea
        ref="input"
        spellcheck="false"
        autofocus
        placeholder="Antwort eingeben"
      />
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
    setValue(active) {
      this.$store.dispatch('updateAnswers', {
        answer: this.selected,
        id: active
      })
      console.log(active + 'passed active in setValue Form1')
      this.act = active

      this.showSuccess = true

      setTimeout(() => {
        this.showSuccess = false
      }, 2000)
    },
    setFocus: function() {
      this.$refs.input.focus()
    }
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
textarea {
  opacity: 0;
}
</style>
