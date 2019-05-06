<template>
  <div class="container mx-auto  py-20 ">
    <div class="flex flex-col md:flex-row">
      <div class="flex-1 md:w-1/3 text-xl leading-normal tracking-wide text-black mx-8 mr-32">
        <div class=" mb-4 tracking-normal text-4xl font-light">
          Wähle den passenden Fragebogen für dein Projekt   
        </div>
        <p class="text-grey-darkest font-thin mb-6">
          Mit Hilfe deiner Antworten können wir dir besser helfen und genauer auf dich abstimmen. 
        </p>
     
        <img src="~/assets/turnitin3.png" class="w-72 ">
      </div>
  
      <div class="flex-1 md:w-2/3 mx-4 mt-8 md:mt-0">
        <div class>
          <div class="w-full">
            <div class="-mx-2 flex flex-col -mb-4">
              <div>
                <div class>
                  <nuxt-link
                    to="/fragebogen/anschreiben"
                    for="plan_id_1"
                    class="hover:border-blue flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2  hover:border-primary bg-grey-lightest no-underline"
                  >
                    <input id="plan_id_1" type="radio" name="plan_id" class="hidden" value="1">
                    <div class="py-3 px-4">
                      <div class="flex items-center justify-between">
                        <div class="text-xl  text-black">
                          Anschreiben
                        </div>
                      <!---->
                      </div>
                    </div>
                  </nuxt-link>

                  <nuxt-link
                    to="/angebot/deckblatt"
                    for="plan_id_3"
                    class="hover:border-blue no-underline flex-1 block card hover:border-primary hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 "
                    @click.native="clicked"
                  >
                    <input id="plan_id_3" type="radio" name="plan_id" class="hidden" value="3">
                    <div class="py-3 px-4">
                      <div class="flex items-center justify-between">
                        <div class="text-xl  text-black">
                          Deckblatt
                        </div>
                      <!---->
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/angebot/lebenslauf"
                    for="plan_id_5"
                    class="hover:border-blue no-underline flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 "
                    @click.native="clicked"
                  >
                    <input id="plan_id_5" type="radio" name="plan_id" class="hidden" value="5">
                    <div class="py-3 px-4">
                      <div class="flex items-center justify-between">
                        <div class="text-xl  text-black">
                          Lebenslauf
                        </div>
                      <!---->
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/angebot/berufsclub"
                    for="plan_id_5"
                    class="hover:border-blue no-underline flex-1 block card hover:bg-white-dark cursor-pointer select-none border border-grey-light shadow-sm mb-2 "
                    @click.native="clicked"
                  >
                    <input id="plan_id_5" type="radio" name="plan_id" class="hidden" value="5">
                    <div class="py-3 px-4">
                      <div class="flex items-center justify-between">
                        <div class="text-xl text-black">
                          Anschreiben Lehrabsolventen
                        </div>
                      <!---->
                      </div>
                    </div>
                  </nuxt-link>
                  <div class="flex-1 w-full text-xl leading-normal tracking-wide text-black mt-12">
                    <div class=" mb-4 tracking-normal text-2xl font-light">
                      Anschreiben  
                    </div>
                    <p class="text-grey-darkest font-thin mb-6">
                      PingPing is designed as a flexible multi-user system. The primary owner can invite
                      unlimited users to his team. Nobody else can change billing details or plans but you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="flex-1 md:w-2/3 mx-4 mt-8 md:mt-0">
      <div class="mb-12">
        <img src="~/assets/turnitin1.png" class="shadow-sm rounded-lg">
        <p class="text-xl">
          Anschreiben
        </p>
      </div>
      <div class="mb-12">
        <img src="~/assets/turnitin2.png" class="shadow-sm rounded-lg">
        <p class="text-xl">
          Deckblatt
        </p>
      </div>
      <div class="mb-12">
        <img src="~/assets/turnitin3.png" class="shadow-sm rounded-lg">
        <p class="text-xl">
          Lebenslauf
        </p>
      </div>
    </div> -->
  </div>
  </div>
</template>
<script>
export default {
  layout: 'empty'
}
</script>
