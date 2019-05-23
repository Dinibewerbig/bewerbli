<template>
  <div class="bg-white">
    <div class="w-full relative max-w-2xl mx-auto py-20 px-10 md:px-4">
      <div class="flex  flex-row">
        <div class="w-1/2 h-screen mx-8 mt-8 ">
          <div class="render">
            <video class="w-full" muted="" autoplay="" loop="" playsinline="">
              <source src="https://cdn.clearbit.com/assets/videos/cb-home-hero-render-n2918.webm" type="video/webm">
            </video>
          </div>
        </div>
        <div class="z-10 flex-1 w-1/3 text-xl tracking-wide text-black mx-8">
          <div
            class=" text-6xl font-medium mb-4 tracking-normal"
          >
            Deine Daten sind wichtig
          </div>
          <p class="text-grey-darkest font-thin mb-6">
            Um das Anschreiben auf dich abzustimmen und zu personalieren haben wir den bewerbli Datensammler kreieert.
          </p>
          <p
            class="text-grey"
          >
            Probiere den Bewerbli Datensammler jetzt aus. 
          </p>
          <button class="mt-12 bg-black btn font-medium text-white uppercase   rounded">
            Los geht's
          </button>
        </div>
      </div>
    </div>
    <funnel />
    <timeline />
  </div>
</template>
<script>
import funnel from '~/components/funnel'
import timeline from '~/components/timeline'
export default {
  components: {
    funnel,
    timeline
  }
}
</script>
<style lang="scss" scoped>
.render {
  position: absolute;
  left: -26.25rem;
  width: 110%;
}
</style>
