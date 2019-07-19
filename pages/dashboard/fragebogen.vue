<template>
  <main class="">
    <div class="   py-8">
      <nuxt-child />
    </div>
    <footer1 />
    </div>
    <modals-container ref="modal" />
  </main>
</template>
<script>
import footer1 from '~/components/footerdashboard'
import { mapState } from 'vuex'
import steps from '~/assets/steps.js'
import fragebogenModal from '~/components/fragebogenModal.vue'
export default {
  components: {
    footer1
  },
  layout: 'login',
  data() {
    return {
      steps: steps
    }
  },
  computed: {
    ...mapState(['answers'])
  },
  methods: {
    setValue(active) {
      this.$store.dispatch('updateAnswers', {
        answer: this.answers[active],
        id: active
      })
    },
    openModal(key) {
      this.$modal.show(
        fragebogenModal,
        { key1: key },
        {
          transition: 'nice-modal-fade',
          delay: 100,
          adaptive: true,
          height: 'auto',
          classes: 'demo-modal-class'
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
