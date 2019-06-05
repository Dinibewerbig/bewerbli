<template>
  <div>
    <croppie
      ref="croppie"
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
</template>

<script>
import Croppie from '@idecardo/vue-croppie'

export default {
  components: {
    Croppie
  },
  data: () => ({
    image: 'https://i.imgur.com/ofHthFG.jpg',
    result: null
  }),
  mounted() {
    this.$refs.croppie.bind({
      url: this.image
    })
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
