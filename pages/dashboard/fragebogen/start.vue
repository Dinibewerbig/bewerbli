<template>
  <div class="bg-white px-8 pb-16">
    <div class=" my-2">
      <h2 class="text-3xl text-headline font-normal">
        Wähle deinen Service 
      </h2>
    </div>
    <div class=" my-8 text-lg  flex flex-row  borderbottom">
      <nuxt-link to="deckblatt" class="cards borderbottom  ">
        <img class="w-48 -ml-4" src="~/assets/icon1.svg">
        <div>
          Deckblatt
          <div class="copy">
            Erstelle jetzt deinen persönlichen Lebenslauf. 
          </div>
          <div class="text-headline text-2xl">
            Gratis 
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="lebenslauf" class="cards borderbottom  ">
        <img class="w-48 -ml-4" src="~/assets/icon1.svg">
        <div>
          Lebenslauf
          <div class="copy">
            Erstelle jetzt deinen persönlichen Lebenslauf. 
          </div>
          <div class="text-headline text-2xl">
            Gratis 
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="anschreiben" class="cards borderbottom  ">
        <font-awesome-icon class="text-icon2 mr-16" style="font-size: 30px;" :icon="['fas', 'home']" />
        <div>
          Bewerbungsschreiben
          <div class="copy">
            Erstelle jetzt deinen persönlichen Lebenslauf. 
          </div>
          <div class="text-headline text-2xl">
            CHF 25.-
          </div>
        </div>
      </nuxt-link>
    </div>
   
    <div class="flex flew-row flex-wrap">
      <nuxt-child />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.auswahl {
  @apply no-underline inline-block py-4 px-4;
}

.nuxt-link-active {
  border-color: black;
  border-bottom-width: 4px;
}

.cards {
  @apply bg-white text-headline flex rounded-l font-bold text-lg rounded-r items-center no-underline px-12 py-6 w-full;
}

.cards:hover {
  @apply bg-elahover;
}

.copy {
  @apply font-normal text-lead mt-4;
}
</style>
