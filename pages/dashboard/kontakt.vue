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
  @apply flex;
}
</style>
