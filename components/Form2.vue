<template>
  <div>
    <h1> {{ fragen }}</h1>
    
    <resizable-textarea>
      <form>
        <textarea  
          ref="input"
          v-model="answers[active]"
          spellcheck="false"
          autofocus
        />  
      </form>
    </resizable-textarea>
  </div>
</template>

<script>
import resizableTextarea from '~/components/resizableTextareas.vue'
import { mapState } from 'vuex'
// const fb = require('~/services/firebaseConfig.js')
export default {
  name: 'Form2',
  components: { resizableTextarea },
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
      this.$store.dispatch('updateAnswers', {
        answer: this.answers[active],
        id: active
      })
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
  border-radius: 0;
  font-family: 'Avenir Roman';
  resize: none;
  line-height: 1.7em;
  font-size: 1.5em;
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
