
<template>
  <modal
    name="editdocument-modal"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :delay="100"
    :adaptive="true"
    height="auto"
    :width="370"
    @before-open="beforeOpen"
  >
    <div class="card card--simple">
      <div>
        <form>
          <div class="card-header">
            <h1 class="text-3xl mx-auto text-info3">
              Nimm Änderungen vor
            </h1>
          </div>
         
          <div class="card-body w-full">
            <div class="mb-6">
              <label class="form-label mb-4" for="card-element">
                Neuer Name
              </label>
              <input id="dokument-name" v-model.trim="documentNames.new" class="form-input" type="text" placeholder="Firmenname">
            </div>
            <div class="mx-auto flex flex-row flex-wrap">
              <div
                class="btn h-12 mb-12  bg-info3 uppercase w-2/5 mr-6 font-medium text-white p-4 tracking-wider"
                @click="editName()"
              >
                ändern
              </div>
              <div
                class="btn h-12 mb-12  bg-info3 uppercase w-1/2 font-medium text-white p-4 tracking-wider"
                @click="deleteDocument()"
              >
                <XIcon class="mr-2 relative" />
                löschen
              </div>
              <div class="mb-6">
                <label class="form-label mb-4" for="card-element">
                  Dupliziere das Dokument als
                </label>
                <input id="dokument-name" v-model.trim="documentNames.dup" class="form-input" type="text" placeholder="Firmenname">
              </div>
              <div
                class="btn h-12 mb-12  bg-info3 uppercase w-3/5 mr-6 font-medium text-white p-4 tracking-wider"
                @click="duplicateDocument()"
              >
                <CopyIcon class="mr-2 relative" />dupliziere
              </div>
            </div>
          </div>
          <div class="card-footer" />
        </form>
      </div>
      </form>
    </div>
    </div>
  </modal>
</template>

  <script>
import { XIcon } from 'vue-feather-icons'
import { CopyIcon } from 'vue-feather-icons'
import { mapState } from 'vuex'
const fb = require('~/services/firebaseConfig.js')
export default {
  name: 'EditdocumentModal',
  layout: 'login',
  components: { XIcon, CopyIcon },
  data() {
    return {
      route: null,
      documentNames: { old: null, new: null }
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile'])
  },
  methods: {
    beforeOpen(event) {
      this.route = event.params.route
      this.documentNames.old = event.params.documentName
      this.documentNames.new = event.params.documentName
      this.documentNames.dup = event.params.documentName
    },
    editName: function(documentNames) {
      fb.usersCollection
        .doc(this.currentUser.uid)
        .collection('dokumente')
        .doc(this.documentNames.old)
        .get()
        .then(res => {
          fb.usersCollection
            .doc(this.currentUser.uid)
            .collection('dokumente')
            .doc(this.documentNames.new)
            .set(res.data())
            .then(ref => {
              fb.usersCollection
                .doc(this.currentUser.uid)
                .collection('dokumente')
                .doc(this.documentNames.old)
                .delete()
                .then(ref => {
                  this.$store.dispatch('fetchDocumentsList')
                  this.$modal.hide('editdocument-modal')
                })
                .catch(err => {
                  console.log(err)
                })
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    duplicateDocument: function(documentNames) {
      fb.usersCollection
        .doc(this.currentUser.uid)
        .collection('dokumente')
        .doc(this.documentNames.old)
        .get()
        .then(res => {
          fb.usersCollection
            .doc(this.currentUser.uid)
            .collection('dokumente')
            .doc(this.documentNames.dup)
            .set(res.data())
            .then(ref => {
              this.$store.dispatch('fetchDocumentsList')
              this.$modal.hide('editdocument-modal')
            })

            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteDocument: function(documentName) {
      fb.usersCollection
        .doc(this.currentUser.uid)
        .collection('dokumente')
        .doc(this.documentNames.old)
        .delete()
        .then(ref => {
          this.$store.dispatch('fetchDocumentsList')
          this.$modal.hide('editdocument-modal')
        })
        .catch(err => {
          console.log(err)
        })
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
</style>
