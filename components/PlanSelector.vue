<template>
  <div class="flex flex-wrap -mx-4">
    <div class="w-full mb-6 md:mb-0 md:w-1/2">
      <div class="px-4 pt-10 relative">
        <div class="absolute pin-x pin-t">
          <schedule-toggle :value="schedule" @input="$emit('change-schedule', $event)" />
        </div>
        <plan-card
          :schedule="schedule"
          name="Starter"
          monthly="19"
          yearly="190"
          :selected="selectedPlan === 'Starter'"
          :features="[
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Starter')"
        />
        <plan-card
          :schedule="schedule"
          name="Professional"
          monthly="49"
          yearly="490"
          :selected="selectedPlan === 'Professional'"
          :features="[
            '15,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Professional')"
        />
        <plan-card
          :schedule="schedule"
          name="Small Business"
          monthly="99"
          yearly="990"
          :selected="selectedPlan === 'Small Business'"
          :features="[
            '45,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Small Business')"
        />
      </div>
 
      <div class="w-full md:w-1/2 px-4 md:pt-10">
        <form action="#" method="POST">
          <h2 class="md:hidden text-center text-white font-medium text-xl mb-4">
            Your Information
          </h2>
          Create my account
          </button>
          <p class="text-white font-bold text-sm text-center">
            Includes a 14 day trial before billing begins
          </p>
          </botton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PlanCard from '~/components/PlanCard'
import ScheduleToggle from '~/components/ScheduleToggle'

export default {
  components: {
    PlanCard,
    ScheduleToggle
  },
  props: ['schedule', 'selectedPlan'],
  methods: {
    selectPlan(plan) {
      this.$emit('select', plan)
    }
  }
}
</script>
