<template>
  <div class="enopadding ">
    <div class="h-24 image">
      <h2 class="h2-margin">
        Hello thomas
      </h2><h4 class="nomargin-top">
        It’s good to have you here!
      </h4>
    </div>

    <div class="flex flew-row flex-wrap">
      <nuxt-link to="/start/deckblatt" class="cards borderbottom  ">
        <font-awesome-icon class="text-icon2 mr-16" style="font-size: 30px;" :icon="['fas', 'home']" />
        <div>
          Zu den Fragebögen
          <div>
            Hier waasddf addf asdff asddf asdf asdf a
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/bestellungen" class="cards borderbottom  ">
        <font-awesome-icon class="text-icon2 mr-16" style="font-size: 30px;" :icon="['fas', 'home']" />
        <div>
          Zu dem Store
          <div class="copy">
            Hier waasddf addf asdff asddf asdf asdf a
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/fragebogen/dokumente" class="cards borderbottom  ">
        <font-awesome-icon class="text-icon2 mr-16" style="font-size: 30px;" :icon="['fas', 'home']" />
        <div>
          zu deinen Dokumenten
          <div class="copy">
            Hier waasddf addf asdff asddf asdf asdf a
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cards {
  @apply bg-white text-headline flex rounded-l font-bold text-lg rounded-r items-center no-underline px-12 py-6 w-full;
}

.cards:hover {
  @apply bg-elahover;
}

.copy {
  @apply font-normal text-lead mt-4;
}

.image {
  background-position-x: 10px;
  background-image: url(~assets/welcomeimage.png);
  background-size: 30%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
}
</style>
