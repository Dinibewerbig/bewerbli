<template>
  <section class="">
    <div id="adminChild">
      <nuxt-child :key="$router.fullPath" />
    </div>
    <h1>hello</h1>
    <div v-for="(item, key) in items" :key="key">
      <div>{{ item.name }}</div>  
      <button @click="deleteItem(key)">
        <div>delete</div>
      </button>
    </div>
    <input
      id="item"
      v-model="items[key]"
      name="item"
      label="Add New Item"
      @keyup.enter="addItem"
    >
    <button @click="addItem">
      Add Item
    </button>
    </div>
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
      item: '',
      items: {}
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
#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.adminNavRoute {
  margin: 0.25em 0.5em;
  padding: 0.25em;
}
#adminChild {
  margin-top: 1em;
}
</style>
<!--  -->
