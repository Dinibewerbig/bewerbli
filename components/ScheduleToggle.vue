<template>
  <div class="select-none w-40 px-8 py-4 mx-auto flex rounded mb-4">
    <button
      type="button"
      class="border rounded py-1 uppercase text-center w-1/2  font-medium tracking-wide"
      :class="[isMonthly ? 'hidden ' : 'text-navy-light ']"
      @click="select('monthly')"
    >
      Privatpersonen
    </button>
    <button
      type="button"
      class="border rounded py-1 uppercase text-center w-1/2  font-medium tracking-wide"
      :class="[isYearly ? ' hidden ' : 'text-navy-light ']"
      @click="select('yearly')"
    >
      Schulen
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number, default: null }
  },
  computed: {
    isMonthly() {
      return this.value === 'monthly'
    },
    isYearly() {
      return this.value === 'yearly'
    }
  },
  methods: {
    select(schedule) {
      this.$emit('input', schedule)
    }
  }
}
</script>
