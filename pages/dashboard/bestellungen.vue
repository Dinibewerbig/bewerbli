<template>
  <main class="flex-1">
    <div class="flex-1 ">
      <div class=" ">
        <div class="card-header">
          <h1>Deine Bestellungen</h1>
          <div
            class="italic text-grey-dark text-sm"
          >
            Dieser Fragebogen hilft uns, den Bewerbungsbrief individuell anzupassen.
          </div>
        </div>
        <div class="card-body p-0">
          <div>
            <!---->
            <table class="table w-full">
              <thead>
                <tr>
                  <th class="pl-6 text-left">
                    ID
                  </th>
                  <th class="pl-6 text-left">
                    Verwalte deine Bestellungen
                  </th>

                  <th class="pl-6 text-left" />
                </tr>
              </thead>

              <tbody v-for="(answer, key) in answers" :key="key" class="post">
                <tr class="monitor group hover:bg-white-dark">
                  <td class="py-4 pl-6 w-auto align-top">
                    {{ key }}
                  </td>
                  <td class="py-4 pl-6 text-left w-min">
                    <div class="flex items-center">
                      <div>
                        <div v-if="key >= 0" class=" text-black">
                          {{ steps[key].frage }}
                        </div>
                        <div class="flex break-normal">
                          <span>{{ answer }}</span>
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
        </div>
        <div class="card-footer ">
          <form action="https://pingping.io/monitors" method="post">
            <input type="hidden" name="_token" value="NWXqEwhsVj0rHDgESr6XBXfcjGwfazxGBCF2mrGU">
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
       
      <modals-container ref="modal" />
    </div>
    <footer1 />
  </main>
</template>

<script>
// import Zondicon from 'vue-zondicons'
import footer1 from '~/components/footerdashboard'

export default {
  components: {
    footer1
  }
}
</script>


<style lang="scss" scoped>
</style>
