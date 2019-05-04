<template>
  <div class="card">
    <div class="card-header">
      <h1>Produkte</h1> 
    </div> 
    <div class="card-body">
      <div class="">
        <div class="mb-4 pr-10">
          <p class="  text-grey-darker"> 
            Lerne mehr über unsere Produkte.
          </p>
        </div> 
        <div class="w-full">
          <div class="-mx-2 flex flex-col -mb-4">
            <div>
              <div class="">
                <nuxt-link to="/angebot/anschreiben" for="plan_id_1" class="flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 mx-2 hover:border-primary bg-grey-lightest no-underline" @click.native="clicked">
                  <input
                    id="plan_id_1"
                    type="radio"
                    name="plan_id"
                    class="hidden"
                    value="1"
                  > 
                  <div class="py-3 px-4">
                    <div class="flex items-center justify-between">
                      <div class="font-bold text-primary">
                        Anschreiben
                      </div> <!---->
                    </div> <span class="font-bold text-xl align-top">
                      <span class="text-grey-darkest">
                        CHF
                      </span> <span class="text-black">
                        25.00
                      </span>
                      <!-- </span> <span class="text-grey-darker">
                      / <span>month</span>
                    </span> -->
                    </span>
                  </div>
                </nuxt-link>
  
                <nuxt-link to="/angebot/deckblatt" for="plan_id_3" class="flex-1 block card hover:border-primary hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 mx-2" @click.native="clicked">
                  <input id="plan_id_3" type="radio" name="plan_id" class="hidden" value="3"> <div class="py-3 px-4">
                    <div class="flex items-center justify-between">
                      <div class="font-bold text-primary">
                        Deckblatt
                      </div> <!---->
                    </div> <span class="font-bold text-xl align-top">
                      <span class="text-grey-darkest">
                        CHF
                      </span> <span class="text-black">
                        10.00
                      </span>
                    </span> <span class="text-grey-darker">
                      / <span>month</span>
                    </span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/angebot/lebenslauf" for="plan_id_5" class="flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 mx-2" @click.native="clicked">
                  <input id="plan_id_5" type="radio" name="plan_id" class="hidden" value="5"> <div class="py-3 px-4">
                    <div class="flex items-center justify-between">
                      <div class="font-bold text-primary">
                        Lebenslauf
                      </div> <!---->
                    </div> <span class="font-bold text-xl align-top">
                      <span class="text-grey-darkest">
                        CHF
                      </span> <span class="text-black">
                        10.00
                      </span>
                    </span> <span class="text-grey-darker">
                      / <span>month</span>
                    </span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/angebot/berufsclub" for="plan_id_5" class="flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 mx-2" @click.native="clicked">
                  <input id="plan_id_5" type="radio" name="plan_id" class="hidden" value="5"> <div class="py-3 px-4">
                    <div class="flex items-center justify-between">
                      <div class="font-bold text-primary">
                        Berufsclub
                      </div> <!---->
                    </div> <span class="font-bold text-xl align-top">
                      <span class="text-grey-darkest">
                        CHF
                      </span> <span class="text-black">
                        150.00
                      </span>
                    </span> <span class="text-grey-darker">
                      / <span>month</span>
                    </span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div> <!---->
        </div>
      </div>
    </div> <div class="card-footer">
      <button class="btn btn--primary">
        <!----> <span><span>Einkauf</span></span> <!---->
      </button>
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
