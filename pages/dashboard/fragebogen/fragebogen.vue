<template>
  <div>
    <div class="">
      <div class="bg-white-dark rounded ">
        <div class="card-header">
          <div class="flex flex-row flex-wrap  items-center mb-8 justify-start">
            <div v-for="item in fragebogenList" :key="item.id" class="flex ">
              <div
            
                class="bg-cool1 text-cool2 font-medium relative m-2 py-2 px-2 hover:shadow rounded no-underline"
                @click.stop="fetchAnswers(item)"
              >
                {{ item }} 
              </div>
            </div>
         

            <button
              class="ml-auto border-info2 border text-info2 font-normal py-2 px-2 mr-4 rounded"
              @click="$modal.show('newfragebogen-modal', { route: '/dashboard/fragebogen/fragebogen' })"
            >
              Neu
            </button>
            <form action="" method="post">
              <div class="flex">
                <button type="submit" class="flex-no-shrink btn btn--primary ml-2">
                  Drucken
                </button>
                <div class="flex-no-shrink flex">
                  <a
                    href="https://pingping.io/monitors/import"
                    class="block btn ml-2 flex items-center"
                  >
                    Kopieren
                  </a>
                </div>
                <div class="flex-no-shrink flex">
                  <a
                    href="https://pingping.io/monitors/import"
                    class="block btn ml-2 flex items-center"
                  >
                    Löschen
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="card-body p-0">
        <table class="table w-full mt-16">
          <tbody v-for="(step, key) in steps" :key="key" class=" cards borderbottom  post">
            <tr class="monitor text-lg  " @click="openModal(key)">
              <td class="py-4 pl-6 w-auto text-icon align-top">
                {{ key }}
              </td>
              <td class="py-4 pl-6 text-left w-min">
                <div class="flex items-center">
                  <div>
                    <div v-if="key >= 0">
                      {{ step.frage }}
                    </div>
                    <div class="flex break-normal mt-3 copy ">
                      <span>{{ answers[key] }}</span>
                    </div>
                  </div>
                </div>
              </td>

              <td class="py-4 px-10 text-right align-top">
                <div class="flex flex-no-wrap " @click="openModal(key)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
  
                    class="fill-current w-6 h-6 mr-3 group-hover:text-grey-dark text-grey-light"
                  >
                    <path d="M8.3,3.7 L12.3,7.7 L4,16 L0,16 L0,12 L8.3,3.7 Z M9.7,2.3 L12,0 L16,4 L13.7,6.3 L9.7,2.3 Z" />
                  </svg>
                  <!-- <a class="btn btn--sm w-full" @click="openCommentModal(post)">
                          Edit
                        </a>-->
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer " />
    </div>
       
    <modals-container ref="modal" />

    </main>
    <newFragebogenModal />
  </div>
  </div>
 
  </div>
</template>
<script>
import { mapState } from 'vuex'
import steps from '~/assets/steps.js'
import newFragebogenModal from '~/components/newFragebogenModal.vue'
import fragebogenModal from '~/components/fragebogenModal.vue'
const fb = require('~/services/firebaseConfig.js')
export default {
  components: { newFragebogenModal },
  layout: 'login',
  data() {
    return {
      steps: steps,
      fragebogen: ''
    }
  },
  computed: {
    ...mapState(['userProfile', 'currentUser', 'fragebogenList', 'answers'])
  },

  methods: {
    fetchAnswers(item) {
      fb.usersCollection
        .doc(this.currentUser.uid)
        .collection('fragebogen')
        .doc(item)
        .get()
        .then(res => {
          console.log(item)
          this.fragebogen = item
          console.log(this.fragebogen)
          this.$store.commit('setAnswers', res.data())
        })
        .catch(err => {
          console.log(err)
        })
    },

    setValue(active) {
      console.log(this.fragebogen)
      this.$store.dispatch('updateAnswers', {
        fragebogen: this.fragebogen,
        answer: this.answers[active],
        id: active
      })
    },
    openModal(key) {
      const data = {}
      data.key = key
      data.fragebogen = this.fragebogen

      this.$modal.show(
        fragebogenModal,
        { data: data },

        {
          transition: 'nice-modal-fade',
          delay: 100,
          adaptive: true,
          height: 'auto',
          classes: 'demo-modal-class'
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.table th {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  // background-color: #f3f6fa;
  color: #666875;
  border-color: #edeef2;
  border-bottom-width: 0.5px;
  white-space: nowrap;
  letter-spacing: 0.03em;
}

table {
  // table-layout: fixed;
  display: table;
  border-collapse: collapse;
  border-color: #e2e5ec;
  border-spacing: 0;
}

.cards {
  @apply bg-white text-headline flex rounded-l font-bold text-lg rounded-r items-center no-underline px-12 py-6 w-full;
}

.cards:hover {
  @apply bg-superlightgrey;
}

.copy {
  @apply font-normal text-lead mt-4;
}

// .sidebar {
//   border-color: #f3f6fa;
//   border-right: solid;
//   border-width: 0.4px;
// }
</style>
