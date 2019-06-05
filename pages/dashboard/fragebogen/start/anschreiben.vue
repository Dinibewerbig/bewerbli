<template>
  <div>
    <div class=" ">
      <h2 class="text-3xl text-headline font-normal mb-16">
        Bewerbungsschreiben
      </h2>
    </div>
    <div class="flex flew-col ">
      <nuxt-link to="bestellungen" class="cards borderbottom flex flex-wrap  ">
        <img class="w-full mb-4 -ml-4" src="~/assets/thumbbrief1.png">
        <div>
          Bewerbungsschreiben
          <div class="copy">
            Hier waasddf addf asdff asddf asdf asdf a
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="bestellungen" class="cards borderbottom bg-grey-lightest flex flex-wrap   ">
        <img class="w-full mb-4 -ml-4" src="~/assets/thumbbrief2.png">
        <div>
          Bewerbungsschreiben
          <div class="copy">
            Hier waasddf addf asdff asddf asdf asdf a
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="" class="cards borderbottom  flex-wrap flex ">
        <img class="w-full mb-4 -ml-4" src="~/assets/thumbbreif3.png">
        <div>
          Bewerbungsschreiben
          <div class="copy">
            Hier waasddf addf asdff asddf asdf asdf a
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="flex flew-col ">
      <nuxt-link to="bestellungen" class="cards borderbottom flex flex-wrap  ">
        <img class="w-full -ml-4" src="~/assets/thumbbrief4.png">
        <div>
          Bewerbungsschreiben 1
          <div class="copy">
            Erstelle jetzt deinen persönlichen Lebenslauf. 
          </div>
          <div class="text-headline text-3xl">
            Gratis 
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="bestellungen" class="cards borderbottom bg-grey-lightest flex flex-wrap   ">
        <img class="w-full -ml-4" src="~/assets/thumbbrief1.png">
        <div>
          Bewerbungsschreiben
          <div class="copy">
            Hier waasddf addf asdff asddf asdf asdf a
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="" class="cards borderbottom  flex-wrap flex ">
        <img class="w-full -ml-4" src="~/assets/thumbbrief2.png">
        <div>
          Bewerbungssschreiuben
          <div class="copy">
            Mittels diesem Fragebogen erstellen wir dir einen persoönlichen Bewerbungsbrief für deine Lehrstellensuche
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.list {
}

.cards {
  @apply bg-superlightgrey m-2 border  border-elahover  text-headline flex rounded-l font-bold text-lg rounded-r items-center no-underline px-12 py-6 w-full;
}

.cards:hover {
  @apply border border-icon;
}

.copy {
  @apply font-normal text-lead mt-4;
}
</style>
