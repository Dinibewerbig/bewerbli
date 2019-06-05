<template>
  <main class="">
    <div class=" mx-auto px-4 flex flew-row flex-wrap py-8">
      <div class="">
        <div class="flex ">
          <div class="card-header">
            <h1>Update Profile</h1>
          </div>
          <div class="card-body">
            <div class="flex mb-6">
              <div class="w-1/3 pr-10">
                <div class="text-black ">
                  Name
                </div>
                <p class="mt-4 text-sm text-grey-darker">
                  Your full name, e.g. John Doe
                </p>
              </div>
              <div class="w-2/3">
                <div class="mb-4">
                  <input
                    id="name"
                    class="form-input"
                    name="name"
                    type="text"
                    value="Thomas Marti"
                    autocomplete="no"
                  >
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/3 pr-10">
                <div class="text-black ">
                  Email
                </div>
                <p class="mt-4 text-sm text-grey-darker">
                  We use that email address to get in touch with you.
                  This is also your login.
                </p>
              </div>
              <div class="w-2/3">
                <div class="mb-4">
                  <input
                    id="email"
                    class="form-input"
                    name="email"
                    type="text"
                    value="thommymarti@gmail.com"
                    autocomplete="no"
                  >
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/3 pr-10">
                <div class="text-black ">
                  Bist du
                </div>
                <p class="mt-4 text-sm text-grey-darker">
                  We use that email address to get in touch with you.
                  This is also your login.
                </p>
              </div>
              
              <div class="w-2/3">
                <div class="mb-4">
                  <vue-single-select
                    v-model="beruf"
                    placeholder="Wähle deinen Lehrberuf"
                    :options="['Schüler oder Schülerinnen', 'Lehrabgänger', 'Erwachsene']"
                    :required="true"
                    class="mb-12"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn--primary">
              Save Profile
            </button>
          </div>
        </div>
        <footer1 />
      </div>
    </div>
  </main>
</template>
<script>
// import Zondicon from 'vue-zondicons'
import footer1 from '~/components/footerdashboard'
import VueSingleSelect from 'vue-single-select'

export default {
  components: {
    footer1,
    VueSingleSelect
  },
  data() {
    return {
      exportItems: [
        { text: 'Schüler oder Schülerin', id: 'word' },
        { text: 'Lehrabgänger', id: 'sfdt' },
        { text: 'Erwachsene', id: 'sfdt' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.w {
  width: 100%;
}
</style>
