
<template>
  <modal
    name="newdocument-modal"
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
              Erstelle ein neues Anschreiben
            </h1>
          </div>
         
          <div class="card-body w-full">
            <div class="mb-6">
              <label class="form-label mb-4" for="card-element">
                Speichern unter
              </label>
              <input id="dokument-name" v-model="documentName" class="form-input" type="text" placeholder="Firmenname">
            </div>
            <div
              class="btn h-12 mb-12 mx-auto bg-info3 uppercase w-1/2 font-medium text-white p-4 tracking-wider"
              @click="openDocument(documentName)"
            >
              öffnen
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
export default {
  name: 'NewdocumentModal',
  layout: 'login',

  data() {
    return {
      documentName: '',
      route: null
    }
  },
  methods: {
    beforeOpen(event) {
      this.route = event.params.route
    },
    openDocument() {
      this.$router.push(this.route)
      setTimeout(() => {
        this.$bus.$emit('openBlanc', this.documentName)
      }, 1200)
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
