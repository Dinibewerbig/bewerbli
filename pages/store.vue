<template>
  <div id="app" class="min-h-screen  font-sans antialiased leading-tight">
    <div class="container mx-auto px-6">
      <header class="flex justify-between items-center py-8">
        <!-- <div>
          <img class="block h-12 w-48" src="~/assets/newlogo2.svg" alt="Transistor">
        </div> -->
      </header>
      <div class="pb-12">
        <h1 class="text-2xl sm:text-3xl  font-medium text-center  pb-16">
          Wähle jetzt deinen Service
        </h1>
        <div class="card card--simple p-8 flex flex-wrap -mx-4">
          <div class="w-full md:w-3/5 mb-6 md:mb-0 ">
            <plan-selector :schedule="schedule" @change-schedule="schedule = $event" />
          </div>
          <div class=" md:w-2/5 px-12  md:pt-10">
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
  layout: 'login',
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
