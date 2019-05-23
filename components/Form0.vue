<template>
  <div class="mx-4">
    <div class="flex-1  text-xl leading-normal tracking-wide text-black mx-8">
      <div
        class="tracking-normal text-4xl mb-12 font-light"
      >
        Weiter geht es. 
      </div>
      <p class="text-grey-darkest font-thin mb-6">
        Die hier gemachten Angaben helfen uns für dich den perfekten Bewerbungsbrief zu formulieren. Bitte beantworte die Fragen so ausfuührlich wie möglich. Viel Spass.
      </p>
      <p class="text-grey-darkest">
        Zeitaufwand: ca. 15 min
      </p>
      <textarea  
        ref="input"
        v-model="answers[active]"
        spellcheck="false"
        autofocus
      />  
    </div>
   
    <p>Je ausführlicher du die Fragen beantwortest, desto besser wird dein Brief.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// const fb = require('~/services/firebaseConfig.js')
export default {
  name: 'Form0',
  components: {},
  props: {
    id: { type: Number, required: true },
    fragen: { type: String, required: true },
    active: { type: Number, default: 0 }
  },
  data() {
    return {
      name12: 'hello',
      title: '',
      answer: '',
      ans: '',
      showSuccess: false
    }
  },

  computed: {
    ...mapState(['userProfile', 'answers', 'currentUser'])
  },

  methods: {
    setValue(active) {
      // this.$store.dispatch('updateAnswers', {
      //   answer: this.answers[active],
      //   id: active
      // })
    },
    setFocus: function() {
      this.$refs.input.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  padding: 10px;
  margin-top: 10px;
  background: 0 0;
  border: 0;
  border: 1px solid #cae0e3;
  border-radius: 0.25rem;
  resize: none;
  line-height: 1.6em;
  width: 100%;
  color: rgb(56, 56, 56);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: 'Univers Light';
  color: rgb(55, 41, 136);
}

// textarea:focus {
//   border-bottom: none;
// }
</style>
