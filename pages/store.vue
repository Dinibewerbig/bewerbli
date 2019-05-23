<template>
  <div class="bg-4">
    <div class="mx-auto w-1/2 relative">
      <div class="pt-32">
        <h1 class="fade-in-up text-center text-5xl font-normal no-delay  ">
          Willkommen zu deinem Warenkorb
        </h1>
        <p class="mb-8 fade-in-up  text-2xl text-center mt-8 long td2 ">
          Wähle den passenden Service 
        </p>
      </div>
    </div>
    <div class="container-lg  leading-tight">
      <div class="pb-12 w-full">
        <div class="flex">
          <div class="w-3/5 mb-6 ">
            <plan-selector :schedule="schedule" @change-schedule="schedule = $event" />
          </div>
          <div class="w-2/5 px-12 pt-10">
            <invoice />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanSelector from '~/components/PlanSelector'
import Invoice from '~/components/Invoice'

export default {
  layout: 'default3',
  components: {
    PlanSelector,
    Invoice
  },
  data() {
    return {
      schedule: 'monthly'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
