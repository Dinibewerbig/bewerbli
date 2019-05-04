<template>
  <div class="select-none w-40  mx-auto flex rounded mb-4">
    <button
      type="button"
      class="focus:outline-none focus:shadow-outline rounded py-1 uppercase text-center w-1/2 text-xs font-bold tracking-wide"
      :class="[isMonthly ? 'bg-white text-navy-darker ' : 'text-navy-light hover:text-white hover:']"
      @click="select('monthly')"
    >
      Einzelperson
    </button>
    <button
      type="button"
      class="focus:outline-none focus:shadow-outline rounded py-1 uppercase text-center w-1/2 text-xs font-bold tracking-wide"
      :class="[isYearly ? 'bg-white text-navy-darker ' : 'text-navy-light hover:text-white hover:']"
      @click="select('yearly')"
    >
      Schulen
    </button>
  </div>
</template>

<script>
export default {
  props: ['value'],
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
