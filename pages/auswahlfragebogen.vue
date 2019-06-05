<template>
  <div class="zp-home-banner-wrap zp-home-banner-wrap-before">
    <div class="container mx-auto text-center ">
      <div class="zp-home-left py-32 w-3/4 mx-auto">
        <h1 class="text-5xl font-semibold pb-12">
          Erstelle deinen Fragebogen
        </h1>
        <p class="text-xl font-normal leading-normal mb-12">
          Erstelle dein Anschreiben mittels unserem ausgeklügelten Fragebogen und einer systematischen Anleitung mit Redemitteln.
        </p>
        <button class="text-xl bg-primary hover:bg-blue-dark text-white font-medium py-2 px-4 rounded">
          Wähle den passenden Fragebogen
        </button>
      </div>
    </div>
    <div class=" promo-sec-wrap ">
      <img
        id="zwave-banner"
        src="~/assets/forms-home-wave2.svg"
      >
      <div class="container mx-auto text-center content-wrap animated">
        <div class="flex flex-row slide-wrap">
          <div class="bg-white w-full md:w-1/4 border-solid border-t-4 border-purple p-6 my-2 mr-4">
            <h3 class="text-grey-dark  font-medium font-sans leading-normal">
              Anschreiben
            </h3>
            <p class="my-3 text-grey font-light tracking-wide font-sans leading-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
  
            <input type="email" class="border-solid border w-full rounded px-3 py-2" placeholder="Email">
  
            <button class="bg-purple text-white px-3 py-2 rounded w-full mt-4">
              Subscribe now!
            </button>
          </div>
          <div class="bg-white shadow rounded to w-full md:w-1/4 border-solid border-t-4 border-purple p-6 my-2">
            <div class="flex justify-between items-center">
              <h4 class="uppercase text-grey text-xs text-wide tracking-wide font-thin ">
                Update
              </h4>
              <span class="text-grey" aria-hidden="true">
                ×
              </span>
            </div>
            <h3 class="text-grey-dark text-sm font-medium font-sans leading-normal">
              Check our latest offer! 50% ON ALL COMPONENTS!
            </h3>
            <p class="my-3 text-grey font-light tracking-wide font-sans leading-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
  
            <input type="email" class="border-solid border w-full rounded px-3 py-2" placeholder="Email">
  
            <button class="bg-purple text-white px-3 py-2 rounded w-full mt-4">
              Subscribe now!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default2'
}
</script>
<style lang="scss" scoped>
.zp-home-banner-wrap {
}

.promo-sec-wrap {
  position: relative;
}

.promo-sec-wrap {
  text-align: center;
}

#zwave-banner {
  width: 2560px;
  position: absolute;

  left: -50%;
  right: -50%;
  margin: auto;
  top: -75%;
  max-width: inherit;
}

.content-wrap {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 0 40px;
  overflow: hidden;
}

.promo-sec-wrap .content-wrap .slide-wrap {
  position: relative;
  z-index: 10;
  margin: 0px auto 30px;
  text-align: center;
  overflow: hidden;
}
</style>
