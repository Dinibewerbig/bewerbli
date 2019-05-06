<template>
  <div class="card">
    <div class="card-header">
      <h1>Unsere Kunden</h1>
    </div>
    <div class="card-body">
      <div class>
        <div class="mb-4 pr-10">
          <p class="text-grey-darker">
            Erfahre mehr über unsere Kunden.
          </p>
        </div>
        <div class>
          <div class="-mx-2 flex-col -mb-4">
            <div>
              <div class="flex">
                <nuxt-link
                  to="/angebot/anschreiben"
                  for="plan_id_1"
                  class="flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 mx-2 hover:border-blue bg-grey-lightest no-underline"
                  @click.native="clicked"
                >
                  <input id="plan_id_1" type="radio" name="plan_id" class="hidden" value="1">
                  <div class="py-3 px-4">
                    <div class="flex items-center justify-between">
                      <div class="font-bold text-primary">
                        Jugendliche
                      </div>
                      <!---->
                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link
                  to="/angebot/anschreiben"
                  for="plan_id_3"
                  class="hover:border-blue flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 mx-2 no-underline"
                  @click.native="clicked"
                >
                  <input id="plan_id_3" type="radio" name="plan_id" class="hidden" value="3">
                  <div class="py-3 px-4">
                    <div class="flex items-center justify-between">
                      <div class="font-bold text-primary">
                        Schulen
                      </div>
                      <!---->
                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link
                  to="/angebot/anschreiben"
                  for="plan_id_5"
                  class="hover:border-blue flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 mx-2 no-underline"
                  @click.native="clicked"
                >
                  <input id="plan_id_5" type="radio" name="plan_id" class="hidden" value="5">
                  <div class="py-3 px-4">
                    <div class="flex items-center justify-between">
                      <div class="font-bold text-primary">
                        Eltern
                      </div>
                      <!---->
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <p class="alert alert--info mt-8">
          Erfahre genaueres, wieso Leute bei uns einkaufen
        </p>
      </div>
      <div class="card-footer">
        <!-- <button class="btn btn--primary">
          <span>
            <span>weitere Meinungen</span>
          </span>
        </button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>
