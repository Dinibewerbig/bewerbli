<template>
  <main class="flex-1">
    <div class="w-full max-w-screen mx-auto px-4 flex py-8">
      <nav class="hidden lg:block lg:w-1/6 mr-8">
        <ul class="list-reset mb-8">
          <div class="pb-3 font-bold uppercase text-black">
            Fragebogen
          </div> <li>
            <nuxt-link to="/dashboard/card1" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 text-grey-dark mr-3 group-hover:text-primary text-primary">
                <path d="M0 0h24v24H0z" fill="none" /> <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
              </svg> <span class="font-bold text-black">
                Bewerbungsbrief
              </span>
              </a>
            </nuxt-link>
          </li> <li>
            <a href="https://pingping.io/account/notifications" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 text-grey-dark mr-3 group-hover:text-primary text-grey-dark">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /> <path d="M0 0h24v24H0z" fill="none" />
              </svg> <span>Lebenslauf</span>
            </a>
          </li> <li>
            <a href="https://pingping.io/account/users" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 mr-3 group-hover:text-primary text-grey-dark">
                <path d="M0 0h24v24H0z" fill="none" /> <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg> <span>Deckblatt</span>
            </a>
          </li> <li>
            <a href="https://pingping.io/account/subscription" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 mr-3 group-hover:text-primary text-grey-dark">
                <path d="M0 0h24v24H0z" fill="none" /> <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg> <span>Subscription</span>
            </a>
          </li> <li>
            <a href="https://pingping.io/account/invoices" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 mr-3 group-hover:text-primary text-grey-dark">
                <path d="M0 0h24v24H0z" fill="none" /> <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg> <span>Invoices</span>
            </a>
          </li> <li class="mt-6 border-t border-grey pt-4">
            <a href="https://pingping.io/account" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current w-6 h-6 mr-3 group-hover:text-primary text-grey-dark">
                <path fill="none" d="M0 0h24v24H0z" /> <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg> <span>Delete Account</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="flex-1">
        <div class="card">
          <div class="card-header">
            <h1>Monitors</h1> <div class="italic text-grey-dark text-sm">
              Uptime and Response Time based on overall. Outages last 30 days.
            </div>
          </div> <div class="card-body p-0">
            <div>
              <!----> <table class="table w-full">
                <thead>
                  <tr>
                    <th class="pl-10 text-left">
                      <div class="flex items-center">
                        <span class="cursor-pointer select-none">
                          Fragen
                        </span> 
                        <span class="ml-1 arrow-down" />
                      </div>
                    </th> 
                    <th class="px-2 text-center">
                      SSL/TLS
                    </th> 
                    <th class="px-2 text-center">
                      Status
                    </th> 
                    <th class="px-2">
                      <div class="flex items-center justify-center">
                        <span class="cursor-pointer select-none">
                          Uptime
                        </span> <span class="ml-1 hidden" />
                      </div>
                    </th> <th class="px-2">
                      <div class="flex items-center justify-center">
                        <span class="cursor-pointer select-none">
                          Outages
                        </span> <span class="ml-1 hidden" />
                      </div>
                    </th> <th class="px-2">
                      <div class="flex items-center justify-center">
                        <span class="cursor-pointer select-none">
                          Response Time
                        </span> <span class="ml-1 hidden" />
                      </div>
                    </th> <th class="px-2">
                      <div class="flex items-center justify-center">
                        <span class="cursor-pointer select-none">
                          Last Check
                        </span> <span class="ml-1 hidden" />
                      </div>
                    </th> 
                    <th class="pr-10">
&nbsp;
                    </th>
                  </tr>
                </thead> 
         
                <tbody v-for="(answer, key) in answers" :key="key" class="post">
                  <tr class="monitor">
                    <td class="py-4 pl-10 w-auto">
                      <div class="flex items-center">
                        <img src="/storage/favicons/AKONtvjJatRREM2f.png" class="mr-3"> <div>
                          <div v-if="key >= 0" class="font-bold text-black">
                            {{ steps[key].frage }}
                          </div> <div class="text-sm">
                            <a href="https://adidas.com/" class="no-underline text-grey-darkest">
                              <span class="font-bold text-sm text-grey-darker">
                                1 
                              </span><h5>{{ answer }}</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </td> 
                    <td class="py-4 px-2 text-center w-min whitespace-no-wrap">
                      <div class="py-1 px-2 font-bold rounded text-center text-xs uppercase bg-grey-lighter text-grey-darker">
                        <span>{{ answer }}</span>
                      </div>
                    </td> 
                    <td class="py-4 px-2 text-center w-min whitespace-no-wrap">
                      <div class="py-1 px-2 font-bold rounded text-center text-xs  bg-danger-light text-danger">
                        <span>{{ answer }}</span>
                      </div>
                    </td> <td class="py-4 px-2 text-center w-min whitespace-no-wrap">
                      <div class="py-1 px-2 font-bold rounded text-center text-xs uppercase bg-danger-light text-danger">
                        0%
                      </div>
                    </td> <td class="py-4 px-2 text-center w-min whitespace-no-wrap">
                      <div class="py-1 px-2 font-bold rounded text-center text-xs uppercase bg-warning-light text-warning">
                        1
                      </div>
                    </td> <td class="py-4 px-2 text-center text-sm w-min whitespace-no-wrap">
                      0.0000
                    </td> <td class="py-4 px-2 text-center text-sm w-min whitespace-no-wrap">
                      a minute ago
                    </td> <td class="py-4 px-10 text-right w-min whitespace-no-wrap">
                      <div class="flex flex-no-wrap justify-end">
                        <button class="btn btn--sm mr-2 w-full">
                          Disable
                        </button> 
                        <a class="btn btn--sm w-full" @click="openCommentModal(post)">
                          Manage
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> <div class="card-footer bg-white">
            <form action="https://pingping.io/monitors" method="post">
              <input type="hidden" name="_token" value="NWXqEwhsVj0rHDgESr6XBXfcjGwfazxGBCF2mrGU"> <div class="flex">
                <div class="flex w-full">
                  <input name="url" placeholder="https://example.com" class="form-input"> <input name="alias" placeholder="My Personal Website (optional)" class="form-input ml-2">
                </div> <button type="submit" class="flex-no-shrink btn btn--primary ml-2">
                  Create Monitor
                </button> <div class="flex-no-shrink flex">
                  <a href="https://pingping.io/monitors/import" class="block btn ml-2 flex items-center">
                    Import
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer>
          <div class="w-full max-w-screen mx-auto px-4 pb-6 pt-12 text-sm text-secondary">
            <div class="flex justify-between">
              <div>
                Built by <a href="https://twitter.com/stefanbauerme" target="_blank" rel="noopener noreferrer" class="no-underline text-primary hover:text-primary-dark hover:underline">
                  @stefanbauerme
                </a>
              </div> <div>
                <ul class="list-reset flex">
                  <li class="mr-4">
                    <a href="https://pingping.io/help" class="no-underline text-primary hover:text-primary-dark hover:underline">
                      Support/Help
                    </a>
                  </li> <li class="mr-4">
                    <a href="https://pingping.io/privacy-policy" class="no-underline text-primary hover:text-primary-dark hover:underline">
                      Privacy Policy
                    </a>
                  </li> <li>
                    <a href="https://pingping.io/imprint" class="no-underline text-primary hover:text-primary-dark hover:underline">
                      Imprint
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
import steps from '~/assets/steps.js'
export default {
  layout: 'login',
  data() {
    return {
      steps: steps
    }
  },
  computed: {
    ...mapState(['answers'])
  }
}
</script>
<style lang="scss" scoped>
.table th {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  background-color: #f3f6fa;
  color: #666875;
  border-color: #edeef2;
  border-bottom-width: 2px;
  white-space: nowrap;
  letter-spacing: 0.03em;
}

.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
</style>
