<template>
  <div>
    <h1>hello hooper 3 Welcome</h1>
    <vue-single-select :options="berufe" initial="seed me" :max-results="20" />
  </div>
</template>

<script>
import VueSingleSelect from '~/components/VueSingleSelect.vue'
import berufe from '~/assets/berufe.js'
export default {
  name: 'Form3',
  components: { VueSingleSelect },
  // eslint-disable-next-line vue/require-prop-types
  props: ['active'],
  data() {
    return {
      berufe: berufe
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
