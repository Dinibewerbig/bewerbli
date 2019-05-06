<template>
  <div>
    <vue-single-select
      v-model="fruit"
      :options="berufe"
      :required="true"
    />
  </div>
</template>
<script>
import berufe from 'assets/berufe.js'
import VueSingleSelect from 'vue-single-select'
export default {
  components: {
    VueSingleSelect
  },
  data() {
    return {
      terms: '',
      berufe
    }
  }
}
</script>
