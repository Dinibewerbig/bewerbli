<template>
  <div class=" text-xl leading-normal tracking-wide text-black mx-8">
    <div class>
      <div class="tracking-normal mt-4 text-4xl mb-2 font-light">
        Willkommen zum Fragebogen Name
      </div>
      <p
        class="text-grey-darkest font-thin mb-6"
      >
        Die hier gemachten Angaben helfen uns für dich den perfekten Bewerbungsbrief zu verfassen. Bitte beantworte die Fragen so ausführlich wie möglich.
      </p>
      <p
        class="text-grey-darkest font-thin mb-6"
      >
        Für welchen Lehrberuf möchtest du dich gerne bewerben?
      </p>
      <vue-single-select
        v-model="beruf"
        placeholder="Wähle deinen Lehrberuf"
        :options="berufe"
        :required="true"
        class="mb-12"
      />
    </div>
    <div v-show="lehrberuf">
      <p class="text-grey-darkest font-thin mb-6">
        Bei welcher Firma möchtest du dich als
        <span class="font-bold">
          {{ beruf }}
        </span> bewerben ?
      </p>
      <div class="flex flex-row">
        <div class="w-3/5 mb-6">
          <input v-model.lazy="firma" class="form" type="text" placeholder="Firma" autofocus>
        </div>
        <div class="w-2/5 ml-12 mb-6">
          <input v-model.lazy="ort" class="form" type="text" placeholder="Ort" autofocus>
        </div>
      </div>
    </div>
    <div v-show="ort && firma">
      <p class="text-grey-darkest font-thin mb-6">
        Hat die Firma
        <span class="font-bold">
          {{ firma }}
        </span> eine eigene Website?
      </p>
      <div class="mb-6">
        <input v-model.lazy="website" class="form" type="text" autofocus placeholder="www.">
      </div>
    </div>
    <div v-show="website" class="p-3 rounded light no-underline text-info2" @click="anmelden">
      Melde dich an um weiterzufahren <ArrowRightIcon />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import berufe from 'assets/berufe.js'
import VueSingleSelect from 'vue-single-select'
import { ArrowRightIcon } from 'vue-feather-icons'
const fb = require('~/services/firebaseConfig.js')

export default {
  components: {
    VueSingleSelect,
    ArrowRightIcon
  },

  data() {
    return {
      terms: '',
      berufe,
      beruf: null,
      firma: null,
      ort: null,
      website: null
    }
  },

  computed: {
    ...mapState(['currentUser', 'userProfile']),
    lehrberuf: function() {
      if (this.beruf) {
        return true
      } else return false
    }
  },
  created() {
    this.$bus.$on('saveInput', payload => {
      this.saveDoc(payload)
    })
  },
  methods: {
    saveDoc: function(payload) {
      this.$nextTick(() => {
        fb.usersCollection
          .doc(this.currentUser.uid)
          .collection('fragebogen')
          .doc(this.firma)
          .set({
            beruf: this.beruf,
            firma: this.firma,
            Ort: this.ort,
            Website: this.website
          })
          .then(ref => {
            console.log(payload)
            this.$store.commit('setFirma', this.firma)
            console.log('commit to store' + this.firma)
            if (payload === undefined) {
              this.$router.push('/dashboard/fb_anschreiben/start')
            }
          })
      })
    },
    anmelden: function() {
      if (!this.currentUser) {
        this.$modal.show('login-modal', { route: null })
      } else {
        this.saveDoc()
      }
      // this.$store.dispatch('fetchDocumentsList')
      // if (route) {
      //   this.$router.push('/fragebogen/start')
      // } else {
      //   console.log('saved ' + this.documentName)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 0.25rem;
  border-color: #ffc4c4;
  border-style: solid;
  border-width: 1px;
  // background-color: #f3f6fa;
  color: #1b476f;
}
</style>
