<template>
  <div class="">
    <div class="border-bottom pb-6">
      <h2 class="font-normal text-white">
        Wie funktioniert's?
      </h2>
    </div>
    <div class="">
      <div class>
        <div class="">
          <div class="-mx-2 flex flex-col -mb-4">
            <div>
              <nuxt-link
                to="/howto/ersteSchritte"
                for="plan_id_1"
                class=" flex-1 cursor-pointer select-none  shadow-sm mb-2 mx-2  no-underline"
                @click.native="clicked"
              >
                <div class="py-3 px-4">
                  <div class="flex ">
                    <div class="text-info4 w-1/3 text-xl font-medium">
                      <LayersIcon class="text-2xl" />
                      individueller Fragebogen
                      <ArrowRightIcon />
                      <!-- <Zondicon icon="arrow-thin-right" class="zondicon fill-current text-info1 w-5" /> -->
                    </div>
                    <div class="text-white w-1/2">
                      Dank deinen Daten zu einem besseren Brief
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
import { ArrowRightIcon, LayersIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowRightIcon,

    LayersIcon
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>
