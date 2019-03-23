<template>
  <div>
    <q-search v-model="terms">
      <q-autocomplete
        text-color="black"
        color="black"
        separator
        placeholder="Featuring static data"
        :static-data="{field: 'value', list: countries}"
        :value-field="v => `${ v.value }`"
        @selected="selected"
      />
    </q-search>
  </div>
</template>

<script>
import countries from 'assets/berufe.json'

// See above for the data format for the array of objects with required and optional data
export default {
  data() {
    return {
      terms: '',
      countries
    }
  }
}
</script>
