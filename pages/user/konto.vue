<template>
  <section class="">
    <div id="adminChild">
      <nuxt-child :key="$router.fullPath" />
    </div>
    <h1>hello</h1>
    <div v-for="(item1, key) in items" :key="key">
      <div>{{ item1.name }}</div>  
      <button @click="deleteItem(key)">
        <div>delete</div>
      </button>
    </div>
    <input
      id="item"
      v-model="item"
      name="item"
      label="Add New Item"
      @keyup.enter="addItem"
    >
    <button @click="addItem">
      Add Item
    </button>
  </section>
</template>

<script>
import { DB } from '@/services/fireinit.js'

export default {
  asyncData({ store }) {
    return {
      itemsRef: DB.ref(`items/${store.state.user.uid}`)
    }
  },
  data() {
    return {
      items: {},
      item: ''
    }
  },
  created() {
    const vm = this
    vm.itemsRef.on('value', function(snapshot) {
      vm.items = snapshot.val()
    })
  },
  methods: {
    addItem() {
      this.itemsRef
        .push({
          name: this.item
        })
        .then(() => {
          this.item = ''
        })
    },
    deleteItem(key) {
      this.itemsRef.child(key).remove()
    }
  }
}
</script>

<style>
.group:hover .group-hover\:text-white {
  color: #fff;
}
#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
input {
  border: black;
  border-bottom: 2px;
}
.adminNavRoute {
  margin: 0.25em 0.5em;
  padding: 0.25em;
}
#adminChild {
  margin-top: 5em;
}
</style>
<!--  -->
