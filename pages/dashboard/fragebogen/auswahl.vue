
<template>
  <div class="-mx-2 w-full flex flex-col -mb-4">
    <div>
      <div class="py-3 px-4 border-b border-grey-light">
        <h1 class="mb-24">
          Fragbögen
        </h1>
        <div class="text-info1 w-1/5 text-xl mb-8 ">
          <FileTextIcon class="mr-2 ml-4 text-2xl" />Anschreiben
           
          <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
        </div>
        <div class="flex flex-row flex-wrap w-100 items-center mb-8 justify-start">
          <div v-for="item in fragebogenList" :key="item.id" class="flex ">
            <div
            
              class="bg-cool1 text-cool2 font-medium relative m-2 py-2 px-2 hover:shadow rounded no-underline"
              @click.stop="openDocument(item)"
            >
              {{ item }} <span class="relative z-50" @click.stop="$modal.show('editdocument-modal', {documentName: item}, { route: '/dashboard/fragebogen/dokumente' })">
                <Edit3Icon class=" mr-2 ml-4 text-sm" />
              </span> 
            </div>
          </div>
         

          <button
            class="ml-auto border-info2 border text-info2 font-normal py-2 px-2 mr-4 rounded"
            @click="$modal.show('newdocument-modal', { route: '/editor' })"
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
            <div class="text-info2 w-1/5 text-xl ">
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
            <div class="text-info3 w-1/5 text-xl ">
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
    <NewdocumentModal />
    <EditdocumentModal />
  </div>
</template>

<script>
// import Zondicon from 'vue-zondicons'
import { mapState } from 'vuex'
import { Edit3Icon } from 'vue-feather-icons'
import { FileTextIcon } from 'vue-feather-icons'
import { BookIcon } from 'vue-feather-icons'
import { UserCheckIcon } from 'vue-feather-icons'
import NewdocumentModal from '~/components/NewdocumentModal.vue'
import EditdocumentModal from '~/components/editDocumentModal.vue'

export default {
  components: {
    FileTextIcon,
    BookIcon,
    UserCheckIcon,
    NewdocumentModal,
    Edit3Icon,
    EditdocumentModal
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['fragebogenList'])
  },

  methods: {
    clicked() {
      this.$emit('clicked')
    },
    openDocument(documentName) {
      this.$router.push('/editor')
      setTimeout(() => {
        this.$bus.$emit('openFile', documentName)
      }, 600)
    },
    deleteDocument(documentName) {
      this.$bus.$emit('deleteFile', documentName)
      return false
    }
  }
}
</script>
