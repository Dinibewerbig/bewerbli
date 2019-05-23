
<template>
  <div class="-mx-2 w-full flex flex-col -mb-4">
    <div>
      <div class="py-3 px-4 border-b border-grey-light">
        <div class="flex items-center justify-start">
          <div class="text-info1 w-1/5 text-xl font-medium">
            <FileTextIcon class="mr-2 ml-4 text-2xl" />Anschreiben
           
            <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
          </div>
          <nuxt-link
            to="/dashboard/fragebogen/fragebogen"
            class="border-info1 border text-info1 font-normal py-2 px-2 rounded no-underline"
            @click.native="clicked"
          >
            Meier AG
          </nuxt-link>

          <button
            class="ml-auto border-info2 border text-info2 font-normal py-2 px-2 mr-4 rounded"
          >
            Neu
          </button>
        </div>
      </div>

      <nuxt-link
        to="/angebot/deckblatt"
        class="flex-1 cursor-pointer select-none shadow-sm mb-2 mx-2 no-underline"
        @click.native="clicked"
      >
        <div class="py-3 px-4 border-b border-grey-light">
          <div class="flex items-center">
            <div class="text-info2 w-1/5 text-xl font-medium">
              <BookIcon class="mr-2 ml-4 text-2xl" />Deckblatt
              
              <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
            </div>
            <div class="text-info2 italic">
              Du hast noch keinen Fragebogen ausgefüllt.
            </div>

            <button
              class="ml-auto border-info2 border text-info2 font-normal py-2 px-2 mr-4 rounded"
            >
              Neu
            </button>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/angebot/lebenslauf"
        class="flex-1 cursor-pointer select-none shadow-sm mb-2 mx-2 no-underline"
        @click.native="clicked"
      >
        <div class="py-3 px-4 border-b border-grey-light">
          <div class="flex items-center">
            <div class="text-info3 w-1/5 text-xl font-medium">
              <UserCheckIcon class="mr-2 ml-4 text-2xl" />Lebenslauf
              
              <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
            </div>
            <div class="text-info3 italic">
              Du hast noch keinen Fragebogen ausgefüllt.
            </div>
            <button
              class="ml-auto border-info3 border text-info3 font-normal py-2 px-2 mr-4 rounded"
            >
              Neu
            </button>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// import Zondicon from 'vue-zondicons'

import { FileTextIcon } from 'vue-feather-icons'
import { BookIcon } from 'vue-feather-icons'
import { UserCheckIcon } from 'vue-feather-icons'

export default {
  components: {
    FileTextIcon,
    BookIcon,
    UserCheckIcon
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>
