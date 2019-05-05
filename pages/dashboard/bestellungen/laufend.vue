<template>
  <div class="card">
    <div class="card-header">
      <h1>laufende Bestellungen</h1>
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
                Frage
              </th>
              <th class="pl-6 text-left">
                Deine Antwort
              </th>
              <th class="pl-6 text-left" />
            </tr>
          </thead>

          <tbody v-for="(answer, key) in answers" :key="key" class="post">
            <tr class="monitor">
              <td class="py-4 pl-6 w-auto">
                {{ key }}
              </td>
              <td class="py-4 pl-6  text-center w-min whitespace-no-wrap">
                <div class="flex items-center">
                  <div>
                    <div v-if="key >= 0" class="font-bold text-black">
                      {{ steps[key].frage }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="py-4 pl-6 text-left w-min whitespace-pre-wrap">
                <div class="flex items-center break-normal">
                  <span>{{ answer }}</span>
                </div>
              </td>
                    
              <td class="py-4 px-10 text-right w-min whitespace-no-wrap">
                <div class="flex flex-no-wrap justify-end">
                  <button class="btn btn--sm mr-2 w-full">
                    Edit
                  </button>
                  <a class="btn btn--sm w-full" @click="openCommentModal(post)">
                    Edit
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer bg-white">
      <form action="https://pingping.io/monitors" method="post">
        <input type="hidden" name="_token" value="NWXqEwhsVj0rHDgESr6XBXfcjGwfazxGBCF2mrGU">
        <div class="flex">
          <button type="submit" class="flex-no-shrink btn btn--primary ml-2">
            Lösche diesen Fragebogen
          </button>
          <div class="flex-no-shrink flex">
            <a
              href="https://pingping.io/monitors/import"
              class="block btn ml-2 flex items-center"
            >
              Kopiere diesen Fragebogen
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.table th {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  background-color: #f3f6fa;
  color: #666875;
  border-color: #edeef2;
  border-bottom-width: 2px;
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
</style>
