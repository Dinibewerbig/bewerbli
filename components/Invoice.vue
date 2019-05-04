<template>
  <div class="select-none cart lg:block  mr-8 ">
    <div class="text-black border-b border-grey pb-4 mb-6">
      Zusammenfassung
    </div> 
    
    <p v-show="!totalproducts.length">
      <i>Du hast noch keine Bestellungen</i>
    </p>
    <table v-show="products.length" class="text-left  table  w-full   mb-4">
      <tbody>
        <tr v-for="(p, index) in products" :key="index" class=" w-full justify-between flex">
          <td>
            <span class="mr-6">
              {{ p.quantity }}
            </span><span>{{ p.name }}</span>
          </td>
          <td class="font-bold">
            CHF {{ p.quantity * p.price }}
          </td>
        </tr>
      </tbody>
    </table>
    <table v-show="schulproducts.length" class="text-left table table-auto is-striped w-full">
      <tbody>
        <tr v-for="(p, index) in schulproducts" :key="index" class="w-full justify-between flex">
          <td>
            <span class="mr-6">
              {{ p.quantity }}
            </span><span>{{ p.name }}</span>
          </td>
          <td class="font-bold">
            CHF {{ p.quantity * p.price }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-full flex justify-between font-bold text-black mt-6 border-t border-grey pt-8">
      <span>
        Total
      </span>
      <span>
        CHF {{ total }}
      </span>
    </div>
    <div class="mt-8 flex justify-end">
      <button type="submit" class="btn btn--primary" @click="$modal.show('payment-modal')">
        Bestellen
      </button>
    </div>
    <paymentModal :amount="total" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import paymentModal from '~/components/paymentModal.vue'

export default {
  layout: 'login',
  components: { paymentModal },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      schulproducts: 'cartProductsSchule'
    }),
    totalPrivat() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    },
    totalSchule() {
      return this.schulproducts.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    },
    total() {
      return this.totalPrivat + this.totalSchule
    },
    totalproducts() {
      return this.products + this.schulproducts
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-footer {
  padding: 1.5rem 2.5rem;
  text-align: right;
}
</style>
