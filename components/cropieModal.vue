
<template>
  <modal
    name="cropie-modal"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :delay="100"
    :adaptive="true"
    height="auto"
    :width="870"
  >
    <div class="card card--simple">
      <div>
        <form>
          <div class="card-header">
            <h1 class="text-3xl mx-auto text-info3">
              Bild zuschneiden
            </h1>
          </div>
         
          <div class="card-body w-full">
            <div>
              <div>
                <croppie
                  ref="croppie"
                  :viewport="{ width: 225, height: 295 }"
                  :boundary="{ width: 400, height: 400 }"

                  @result="resultEventHandler"
                  @update="updateEventHandler"
                />

                <button @click.prevent="bind()">
                  Bind
                </button>
                <button @click.prevent="destroy()">
                  Destroy
                </button>
                <button @click.prevent="get()">
                  Get
                </button>
                <button @click.prevent="init()">
                  Init
                </button>
                <button @click.prevent="reset()">
                  Reset
                </button>
                <button @click.prevent="resultEvent()">
                  Result via event
                </button>
                <button @click.prevent="resultCallback()">
                  Result via callback
                </button>
                <button @click.prevent="rotate(90)">
                  Rotate
                </button>
                <button @click.prevent="setZoom(1)">
                  Set Zoom
                </button>
              </div>
            </div>
            <div class="card-footer" />
          </div>
        </form>
      </div>
      </form>
    </div>
    </div>
  </modal>
</template>

  <script>
// import { XIcon } from 'vue-feather-icons'
import { mapState } from 'vuex'
import Croppie from '@idecardo/vue-croppie'
// const fb = require('~/services/firebaseConfig.js')
export default {
  name: 'CropieModal',
  layout: 'login',
  components: { Croppie },
  data() {
    return {
      route: null,
      image: 'https://i.imgur.com/ofHthFG.jpg',
      result: null
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile'])
  },

  methods: {
    bind() {
      this.$refs.croppie.bind({
        url: this.image
      })
    },
    destroy() {
      this.$refs.croppie.destroy()
    },
    get() {
      this.$refs.croppie.get()
    },
    init() {
      this.$refs.croppie.init()
    },
    reset() {
      this.$refs.croppie.reset()
    },
    resultEvent() {
      this.$refs.croppie.result({
        type: 'base64'
      })
    },
    resultCallback() {
      const options = {
        type: 'base64',
        format: 'jpeg'
      }

      this.$refs.croppie.result(options, result => {
        this.result = result
      })
    },
    resultEventHandler(result) {
      this.result = result
    },
    rotate(degrees) {
      this.$refs.croppie.rotate(degrees)
    },
    setZoom(value) {
      this.$refs.croppie.setZoom(value)
    },
    updateEventHandler(detail) {
      console.log(detail)
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
