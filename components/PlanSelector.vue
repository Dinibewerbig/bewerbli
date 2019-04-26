<template>
  <div class="flex flex-wrap -mx-4">
    <div class="w-full mb-6 md:mb-0 md:w-1/2">
      <div class="px-4 pt-10 relative">
        <div class="absolute pin-x pin-t">
          <schedule-toggle :value="schedule" @input="$emit('change-schedule', $event)" />
        </div>
        <plan-card
          :schedule="schedule"
          name="Anschreiben"
          monthly="25"
          yearly="420"
          :selected="selectedPlan === 'Anschreiben'"
          :features="[
            '5,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Anschreiben')"
        />
        <plan-card
          :schedule="schedule"
          name="Deckblatt"
          monthly="12"
          yearly="180"
          :selected="selectedPlan === 'Deckblatt'"
          :features="[
            '15,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Deckblatt')"
        />
        <plan-card
          :schedule="schedule"
          name="Lebenslauf"
          monthly="10"
          yearly="160"
          :selected="selectedPlan === 'Lebenslauf'"
          :features="[
            '45,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Lebenslauf')"
        />
         <plan-card
          :schedule="schedule"
          name="Club"
          monthly="180"
          yearly="1200"
          :selected="selectedPlan === 'Club'"
          :features="[
            '45,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Club')"
        />
      </div>
       <plan-card
          :schedule="schedule"
          name="Folgebrief"
          monthly="15"
          yearly="250"
          :selected="selectedPlan === 'Folgebrief'"
          :features="[
            '45,000 downloads / month',
            'Unlimited shows and episodes',
            'Analytics, teams, and more…',
          ]"
          @select="selectPlan('Club')"
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
