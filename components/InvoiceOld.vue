<template>
  <nav class="hidden lg:block  mr-8">
    <ul class="list-reset mb-8">
      <div class="  text-black border-b border-grey pb-4 mb-6">
        Zusammenfassung
      </div> 
      
      
      
      
      <li v-for="(Plan, index) in selectedPlans" :key="index" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
        <span class="text-black">
          {{ Plan }}
        </span>
      </li>
 
      <li class="font-bold text-black mt-6 border-t border-grey pt-4">
        <span>Total</span>
      </li>
    </ul>
    <div class="nav-footer  ">
      <button type="submit" class="btn btn--primary">
        Bezahlen
      </button>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['selectedPlans'])
  }
}
</script>
<style lang="scss" scoped>
.nav-footer {
  padding: 1.5rem 2.5rem;
  text-align: right;
}
</style>
