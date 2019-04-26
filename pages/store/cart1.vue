<template>
  <div id="app" class="min-h-screen  font-sans antialiased leading-tight">
    <div class="container mx-auto px-6">
      <header class="flex justify-between items-center py-8">
        <div>
          <img class="block h-12" src="~/assets/newlogo2.svg" alt="Transistor">
        </div>
      </header>
      <div class="pb-12">
        <h1 class="text-2xl sm:text-3xl  font-medium text-center pt-12 pb-16">
          Wähle jetzt deinen Service
        </h1>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full mb-6 md:mb-0 ">
            <plan-selector :schedule="schedule" :selected-plan="selectedPlan" @change-schedule="schedule = $event" @select="selectedPlan = $event" />
          </div>
          <div class="w-full md:w-1/2 px-4 md:pt-10">
            <nav class="hidden lg:block lg:w-1/6 mr-8">
              <ul class="list-reset mb-8">
                <div class="pb-3 font-bold uppercase text-black">
                  Account
                </div> <li>
                  <a href="https://pingping.io/account/settings" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 text-grey-dark mr-3 group-hover:text-primary text-primary">
                      <path d="M0 0h24v24H0z" fill="none" /> <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                    </svg> <span class="font-bold text-black">
                      Settings
                    </span>
                  </a>
                </li> <li>
                  <a href="https://pingping.io/account/notifications" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 text-grey-dark mr-3 group-hover:text-primary text-grey-dark">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /> <path d="M0 0h24v24H0z" fill="none" />
                    </svg> <span>Notifications</span>
                  </a>
                </li> <li>
                  <a href="https://pingping.io/account/users" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 mr-3 group-hover:text-primary text-grey-dark">
                      <path d="M0 0h24v24H0z" fill="none" /> <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg> <span>Team</span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanSelector from '~/components/PlanSelector'

export default {
  layout: 'login',
  components: {
    PlanSelector
  },
  data() {
    return {
      schedule: 'monthly',
      selectedPlan: 'Starter'
    }
  }
}
</script>

<style>
</style>
