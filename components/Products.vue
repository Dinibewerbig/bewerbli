<template>
  <div>
    <h1 class="title">
      All Products
    </h1>
    <p>{{ length }} products</p>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index" track-by="id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <button class="button is-info" @click="addToCart(product)">
              Add to cart
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(schulproduct, index) in schulproducts" :key="index" track-by="id">
          <td>{{ schulproduct.name }}</td>
          <td>{{ schulproduct.description }}</td>
          <td>${{ schulproduct.price }}</td>
          <td>
            <button class="button is-info" @click="addToSchulCart(schulproduct)">
              Add to cart
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters({
    products: 'privatProducts',
    length: 'getNumberOfPrivatProducts',
    schulproducts: 'schulProducts',
    schullength: 'getNumberOfSchulProducts'
  }),
  methods: mapActions(['addToCart', 'addToSchulCart'])
}
</script>

<style lang="scss">
</style>
