<template>
  <div class="container my-24 flex  justify-between ">
    <div class="w-2/5  ">
      <img src="~/assets/presenter.svg" class="w-full">
    </div>
    <div class="w-1/2  ml-8 mb-2 mt-24  ">
      <h1 class="leading-tight text-5xl font-semibold text-headline">
        Erstelle deinen Lebenslauf selbstständig
        in unter 10 Minuten 
        </span>
      </h1>
    
      <p
        class="text-xl font-normal text-lead my-2 "
      >
        <CheckIcon class="text-2xl" />
        mit Vorlagen 
      </p>
      <p
        class="text-xl font-normal text-lead my-2 "
      >
        <CheckIcon class="text-2xl" />
        schnell
      </p>
      <p
        class="text-xl font-normal text-lead my-2 "
      >
        <CheckIcon class="text-2xl" />
        leichtverständliche Dateneingabe 
      </p>
      <p
        class="text-xl font-normal text-lead my-2 "
      >
        <CheckIcon class="text-2xl" />
        anpassbar 
      </p>
      <p
        class="text-xl font-normal text-lead my-2 "
      >
        <CheckIcon class="text-2xl" />
        als Pdf oder Word downloadbar 
      </p>
      
      <div class="font-bold text-link my-4 italic text-3xl">
        gratis!
      </div>  
      
      <form class="relative">
        <div class="lg:inline-flex px-4 md:px-0 md:pr-12 w-full">
          <button
            class="hover:bg-viaduct-dark font-header w-full lg:w-1/3 py-2 bg-viaduct text-white text-md tracking-wider rounded lg:rounded-l-none"
          >
            <span>Lege los</span>
          </button>
        </div>
        <!---->
        <span
          class="md:absolute left-0 block mt-1 md:ml-3 text-sm font-normal text-red-600"
          style="display: none;"
        />
      </form>
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
