
<template>
  <div class="-mx-2  flex-1 flex-col -mb-4">
    <div class="flex flex-row flex-wrap ">
      <div class="py-3 px-4 w-full border-b border-grey-light">
        <div class="text-info1 w-1/5 text-xl mb-8 ">
          <FileTextIcon class="mr-2 ml-4 text-2xl" />Anschreiben
           
          <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
        </div>
        <div class="flex flex-row flex-wrap w-100 items-center mb-8 justify-start">
          <div v-for="item in documentsList" :key="item.id" class="flex ">
            <div
            
              class="border-info1 border text-info1 font-normal relative m-2 py-2 px-2 rounded no-underline"
              @click.stop="openDocument(item)"
            >
              {{ item }} <span class="relative z-50" @click.stop="$modal.show('editdocument-modal', {documentName: item}, { route: '/dashboard/fragebogen/dokumente' })">
                <Edit3Icon class=" mr-2 ml-4 text-sm" />
              </span> 
            </div>
          </div>
         

          <button
            class="ml-auto border-info2 border text-info2 font-normal py-2 px-2 mr-4 rounded"
            @click="$modal.show('newdocument-modal', { route: '/dashboard/editor' })"
          >
            Neu
          </button>
          <button
            class="ml-auto border-info2 border text-info2 font-normal py-2 px-2 mr-4 rounded"
            @click.stop="createLebenslauf()"
          >
            Create Lebenslauf
          </button>
        </div>
      </div>

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
            @click="$modal.show('newlebenslauf-modal', { route:'/dashboard/fragebogen/dokumente' })"
          >
            Neu
          </button>
        </div>
      </div>
    </div>
    <NewdocumentModal />
    <NewLebenslaufModal />
    <EditdocumentModal />
  </div>
</template>

<script>
// import Zondicon from 'vue-zondicons'
import { mapState } from 'vuex'
import {
  UserCheckIcon,
  BookIcon,
  FileTextIcon,
  Edit3Icon
} from 'vue-feather-icons'

import NewdocumentModal from '~/components/NewdocumentModal.vue'
import EditdocumentModal from '~/components/editDocumentModal.vue'
import NewLebenslaufModal from '~/components/newLebenslaufModal.vue'

export default {
  components: {
    FileTextIcon,
    BookIcon,
    UserCheckIcon,
    NewdocumentModal,
    Edit3Icon,
    EditdocumentModal,
    NewLebenslaufModal
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['documentsList'])
  },

  methods: {
    clicked() {
      this.$emit('clicked')
    },
    openDocument(documentName) {
      console.log('opening')
      this.$router.push('/dashboard/editor')
      setTimeout(() => {
        this.$bus.$emit('openFile', documentName)
      }, 1000)
    },
    deleteDocument(documentName) {
      this.$bus.$emit('deleteFile', documentName)
      return false
    },
    createLebenslauf() {
      console.log('opening')
      this.$router.push('/dashboard/editor')
      setTimeout(() => {
        this.$bus.$emit('createLebenslauf')
      }, 1000)
    }
  }
}
</script>
