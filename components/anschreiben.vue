<template>
  <div class="border-top">
    <div class="container relative my-24 mx-auto  flex  justify-between ">
      <div class="w-1/2  mb-2 pr-4 mt-24  ">
        <h1 class="leading-tight text-5xl font-semibold text-headline">
          Erhalte ein professionelles Bewerbungsschreiben 
          in weniger als 48 Stunden
        </h1>
       
       
        <p
          class="text-xl font-normal text-lead my-2 mt-6 "
        >
          <CheckIcon class="text-2xl" />
          Auf dich persönlich abgestimmt  
        </p>
        <p
          class="text-xl font-normal text-lead my-2 "
        >
          <CheckIcon class="text-2xl" />
          An deine Firma angepasst
        </p>
        <p
          class="text-xl font-normal text-lead my-2 "
        >
          <CheckIcon class="text-2xl" />
          Als Word oder Pdf downloadbar
        </p>
        <div class="font-bold text-link my-4 uppercase text-3xl">
          CHF 25.-
        </div> 
   
        <div class="arrow text-link text-lg  mt-4 w-full">
          <span>Bestelle jetzt deinen individuell angefertigen Bewerbungsbrief für CHF 25.-</span>
        </div>
        <!---->
        <span
          class="md:absolute left-0 block mt-1 md:ml-3 text-sm font-normal text-red-600"
          style="display: none;"
        />
      </div>
      <div class="w-1/2 ml-2 ">
        <img src="~/assets/buildgrow.svg" class="w-full">
      </div>
    </div>
  
   
    <!-- <hr class="max-w-sm md:max-w-3xl border-t border-gray-300 mb-6 w-full">
        <div class="text-center max-w-4xl mx-auto text-md text-gray-500 mb-4">
          <p>Property management software for estate agents needs a change. It's time for a modern cloud based solution that allows you to quickly and effectively manage your inventory of properties, clients, sales and progression, seamlessly link to third party services, and allow your clients to see viewing feedback and accept offers online. All for a simple monthly fee. Sell homes the better way with Viaduct.</p>
          <p class="mt-2 text-sm">
            Viaduct is a trading name of Marzipan Ltd. © 2019.
          </p>
        </div> -->
  </div>
</template>
<script>
import { CheckIcon } from 'vue-feather-icons'
export default {
  components: { CheckIcon }
}
</script>

<style lang="scss" scoped>
.bg-viaduct {
  background-color: #664dc0;
}

.max-w-6xl {
  max-width: 72rem;
}

.max-w-5xl {
  max-width: 64rem;
}
.mr-right {
  margin-right: -24rem;
}
</style>
