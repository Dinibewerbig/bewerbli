<template>
  <div class="mx-auto max-w-lg w-full">
    <div class="py-10 text-center" />
    <div class="card card--simple">
      <div class="border-none card-header text-center ">
        <h3>
          Ändere deine Eingabe 
        </h3>
      </div>
    
      <form id="payment-form" method="post" class="card-body border-b">
        <div class="form-row">
          <div class="mb-6">
            <label class="form-label mb-4" for="card-element">
              <h2>{{ steps[data.key].frage }} </h2> 
            </label>
       
              
            <resizable-textarea>
              <form>
                <textarea  
                  ref="input"
                  v-model.lazy="answers[data.key]"
                  spellcheck="false"
                  autofocus
                />  
              </form>
            </resizable-textarea>
          </div>
           
          <button class="button btn btn--primary w-full p-4 tracking-wider btn-success btn-block" @click.prevent="submitAnswer()">
            Speichern
          </button>
        </div>
      </form>
      <div class="card-footer">
        <div class="text-center h-8" />
      </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import resizableTextarea from '~/components/resizableTextareas.vue'
import steps from '~/assets/steps.js'
export default {
  layout: 'login',
  components: { resizableTextarea },
  props: ['data'],
  data() {
    return {
      steps: steps
    }
  },
  computed: {
    ...mapState(['answers'])
  },
  created: function() {
    this.$nextTick(function() {
      this.$refs.input.focus()
    })
  },

  methods: {
    submitAnswer() {
      console.log(this.data.fragebogen)
      this.$store.commit('setFirma', this.data.fragebogen)
      this.$store.dispatch('updateAnswers', {
        answer: this.answers[this.data.key],
        id: this.data.key
      })
      this.$emit('close')
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
</style>
