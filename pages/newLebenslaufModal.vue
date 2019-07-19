
<template>
  <div class="card h-full card--simple">
    <div class=" flex flex-row flex-wrap">
      <div transition="content">
        <div class="">
          <div v-show="lehrberuf">
            <h1 class="text-3xl mx-auto text-info3">
              Melde dich an
            </h1>
          </div>
          <div class=" w-full">
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
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
import { mapState } from 'vuex'

import berufe from 'assets/berufe.js'

import { ArrowRightIcon } from 'vue-feather-icons'
const fb = require('~/services/firebaseConfig.js')

export default {
  components: {
    ArrowRightIcon
  },

  data() {
    return {
      terms: '',
      berufe,
      fragebogen: true,
      fragebogen2: false,
      unangemeldet: false,
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
            this.$store.commit('setFirma', this.firma)
            console.log('commit to store' + this.firma)
          })
      })
    },
    beforeClose: function() {
      this.unangemeldet = false
      this.fragebogen2 = false
      this.fragebogen = true
      this.beruf = null
      this.firma = null
      this.ort = null
      this.website = null
    },
    anmelden: function() {
      this.saveDoc()
      if (!this.currentUser) {
        this.unangemeldet = true
        this.fragebogen = false
        this.fragebogen2 = false
      } else {
        this.unangemeldet = false
        this.fragebogen2 = true
        this.fragebogen = false
      }
      //   // this.$store.dispatch('fetchDocumentsList')
      //   // if (route) {
      //   //   this.$router.push('/fragebogen/start')
      //   // } else {
      //   //   console.log('saved ' + this.documentName)
    }
  }
}
</script>



  <style lang="scss" scoped>
.demo-modal-class {
  border-radius: 5px;
}

.v--modal-overlay[data-modal='login-modal'] {
  background: rgba(0, 0, 0, 0.4);
}

.content-enter-active,
.content-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.content-enter,
.content-leave-to {
  opacity: 0;
}
</style>
