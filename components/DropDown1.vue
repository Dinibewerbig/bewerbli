<template>
  <div class="">
    <div class="border-bottom pb-6">
      <h2 class="font-normal text-white">
        Unser Angebot
      </h2>
    </div>
    <div class="">
      <div class>
        <div class="">
          <div class="-mx-2 flex flex-col -mb-4">
            <div>
              <nuxt-link
                to="/angebot/anschreiben"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 light px-4 ">
                  <div class="flex  ">
                    <div class="text-info1 w-1/3  text-xl font-medium">
                      <FileTextIcon class="text-2xl " />
                      Anschreiben
                      <ArrowRightIcon />
                      <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
                    </div>
                    <div class="text-white w-1/2">
                      Personalisiertes Bewerbungsschreiben angepasst auf dich und die Firma
                    </div>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/angebot/deckblatt"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 light px-4">
                  <div class="flex ">
                    <div class="text-info2 w-1/3  text-xl font-medium">
                      <BookIcon class="text-2xl" />
                      Deckblatt
                      <ArrowRightIcon />
                      <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
                    </div>
                    <div class="text-white w-1/2">
                      Das passende Deckblatt für dein Bewerbungsdossier
                    </div>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/angebot/lebenslauf"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 light px-4">
                  <div class="flex ">
                    <div class="text-info3  w-1/3 text-xl font-medium">
                      <UserCheckIcon class="text-2xl" />
                      Lebenslauf
                      <ArrowRightIcon />
                      <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
                    </div>
                    <div class="text-white w-1/2">
                      Personalisiertes Bewerbungsschreiben angepasst auf dich und die Firma
                    </div>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link
                to="/angebot/berufsclub"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 light px-4">
                  <div class="flex ">
                    <div class="text-info4 w-1/3  text-xl font-medium">
                      <LayersIcon class="text-2xl" />
                      Berufsclub
                      <ArrowRightIcon />
                      <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
                    </div>
                    <div class="text-white w-1/2">
                      Das All-in-One Angebot für deine Lehrstellensuche. 
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Zondicon from 'vue-zondicons'
import {
  ArrowRightIcon,
  LayersIcon,
  FileTextIcon,
  BookIcon,
  UserCheckIcon
} from 'vue-feather-icons'

export default {
  components: {
    ArrowRightIcon,
    FileTextIcon,
    BookIcon,
    UserCheckIcon,
    LayersIcon
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
