<template>
  <main class="flex-1">
    <div class="w-full max-w-screen mx-auto flex py-8">
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
.table th {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  // background-color: #f3f6fa;
  color: #666875;
  border-color: #edeef2;
  border-bottom-width: 0.5px;
  white-space: nowrap;
  letter-spacing: 0.03em;
}

table {
  // table-layout: fixed;
  display: table;
  border-collapse: collapse;
  border-color: #e2e5ec;
  border-spacing: 0;
}

// .sidebar {
//   border-color: #f3f6fa;
//   border-right: solid;
//   border-width: 0.4px;
// }
</style>
