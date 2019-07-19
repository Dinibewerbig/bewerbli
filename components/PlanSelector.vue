<template>
  <div class="flex flex-wrap -mx-4">
    <div class="w-full mb-6 md:mb-0">
      <div class="px-4 pt-10 relative">
        <div class="absolute pin-x pin-t">
          <schedule-toggle class="w-64" :value="schedule" @input="$emit('change-schedule', $event)" />
        </div>
        <plan-card
          v-for="(product, index) in products"
          v-show="schedule === 'monthly'"
          :id="product.id "
          :key="index"
          class=""
          track-by="id"
          schedule="person"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :selected="selectedPlan === 'Anschreiben'"
          :features="product.features"
          @select="addToCart(product)"
          @deselect="removeFromCart(product)"
        />
        <plan-card
          v-for="(product, index) in schulproducts"
          v-show="schedule === 'yearly'"
          :id="product.id"
          :key="index+'schulproducts'"
          class=""
          track-by="id"
          schedule="klasse"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :selected="selectedPlan === 'Anschreiben'"
          :features="product.features"
          @select="addToSchulCart(product)"
          @deselect="removeFromSchulCart(product)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PlanCard from '~/components/PlanCard'
import ScheduleToggle from '~/components/ScheduleToggle'

export default {
  components: {
    PlanCard,
    ScheduleToggle
  },
  props: {
    schedule: Boolean
  },
  data() {
    return {
      selectedPlan: 'Anschreiben'
    }
  },
  computed: mapGetters({
    products: 'privatProducts',
    length: 'getNumberOfProducts',
    schulproducts: 'schulProducts',
    schullength: 'getNumberOfSchulProducts'
  }),
  methods: mapActions([
    'addToCart',
    'addToSchulCart',
    'removeFromCart',
    'removeFromSchulCart'
  ])
}
</script>
