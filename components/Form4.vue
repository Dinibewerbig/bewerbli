<template>
  <div>
    <h1>hello hooper 4 Welcome</h1>
    <button @click="clicked">
      CLICKED
    </button>
    <button @click="setFocus">
      focus
    </button>
    <resizable-textarea>
      <textarea ref="input" spellcheck="false" autofocus placeholder="Wow" />
    </resizable-textarea>
  </div>
</template>

<script>
import resizableTextarea from '~/components/resizableTextareas.vue'
export default {
  name: 'Form4',
  components: { resizableTextarea },
  // eslint-disable-next-line vue/require-prop-types
  props: ['active'],
  methods: {
    setFocus: function() {
      this.$refs.input.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  background: 0 0;
  border: 0;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #cae0e3;
  border-radius: 0;
  font-family: 'BrandonTextW01-Regular';
  font-size: 2.2rem;
  line-height: 2.9rem;
  min-height: 2em;
  padding-top: 15px;
  resize: none;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
