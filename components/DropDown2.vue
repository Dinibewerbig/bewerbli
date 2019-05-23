<template>
  <div class="">
    <div class="border-bottom pb-6">
      <h2 class="font-normal text-white">
        Unsere Kunden
      </h2>
    </div>
    <div class="">
      <div class>
        <div class="">
          <div class="-mx-2 flex flex-col -mb-4">
            <div>
              <nuxt-link
                to="/kunden/lernende"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 light px-4">
                  <div class="flex ">
                    <div class="text-info1 w-1/3 text-xl font-medium">
                      <UserIcon class="text-2xl" />
                      Lernende
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
                to="/kunden/schulen"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 light px-4">
                  <div class="flex ">
                    <div class="text-info2 w-1/3 text-xl font-medium">
                      <HomeIcon class="text-2xl" />
                      Lehrkräfte
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
                to="/kunden/eltern"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 light px-4">
                  <div class="flex ">
                    <div class="text-info3 w-1/3 text-xl font-medium">
                      <EyeIcon class="text-2xl" />
                      Eltern
                      <ArrowRightIcon />
                      <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
                    </div>
                    <div class="text-white w-1/2">
                      Personalisiertes Bewerbungsschreiben angepasst auf dich und die Firma
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
import { UserIcon } from 'vue-feather-icons'
import { HomeIcon } from 'vue-feather-icons'
import { EyeIcon } from 'vue-feather-icons'
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
  components: {
    UserIcon,
    HomeIcon,
    EyeIcon,
    ArrowRightIcon
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
