<template>
  <section class="container">
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button :disabled="writeSuccessful" @click="writeToFirestore">
          <span v-if="!writeSuccessful">
            Write now
          </span>
          <span v-else>
            Successful!
          </span>
        </button>
      </div>
      <div>
        <h2>
          Read from Firestore.
        </h2>
        <div>
          <button :disabled="readSuccessful" @click="readFromFirestore">
            <span v-if="!readSuccessful">
              Read now
            </span>
            <span v-else>
              Successful!
            </span>
          </button>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { fireDb } from '@/services/fireinit.js'
export default {
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: ''
    }
  },
  async asyncData({ app, params, error }) {
    const ref = fireDb.collection('test').doc('test')
    let snap
    try {
      snap = await ref.get()
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }
    return {
      text: snap.data().text
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection('test').doc('test')
      const document = {
        text: 'This is a test message.'
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
    async readFromFirestore() {
      const ref = fireDb.collection('test').doc('test')
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.text = snap.data().text
      this.readSuccessful = true
    }
  }
}
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
