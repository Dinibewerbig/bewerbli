<template>
  <div class="container mx-auto px-6 text-center my-16">
    <img alt="Watch" src="~/assets/svg1.svg" class="lazy mb-6">
    <div class="mb-16">
      <div
        class=" text-6xl font-medium mb-4 tracking-normal"
      >
        Bringe dein Bewerbungsdossier zum Glänzen
      </div>
    
      <p
        class="text-xl text-spaceblue leading-loose font-normal"
      >
        Wir statten dich mit allem aus, was du für deine Lehrstellensuche brauchst.
      </p>
    </div>
    <div class="flex flex-wrap block my-24">
      <div class="px-6 mb-8 w-full md:w-1/3">
        <img alt="Watch" src="/images/watch.svg" class="lazy mb-6">
        <h2 class="text-lg font-bold text-spaceblue mb-4">
          Bewerbungsdossier
        </h2>
        <p
          class="text-md leading-loose font-normal text-spaceblue-light"
        >
          We’ll make sure your products are always up to date and synchronized to your channels.
        </p>
      </div>
      <div class="px-6 mb-8 w-full md:w-1/3">
        <img alt="Setup" src="~/assets/timber.png" class="lazy mb-6">
      </div>
      <div class="px-6 mb-8 w-full md:w-1/3"> 
        <div class="card-sm text-bold flex">
          <div class="round" width="50" height="50">
            <div class="sc-iwsKbI ceoHNW" color="#6554AF">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path d="M9 22H5v-4H2v12h3v-5h4v5h3V18H9v4zm5-1h3v9h3v-9h3v-3h-9v3zm11 0h3v9h3v-9h3v-3h-9v3zm18-3h-7v12h3v-4h4c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm0 5h-4v-2h4v2z" fill="#6554AF" />
              </svg>
            </div>
          </div>
          <div class="sc-ckVGcZ gImqEs" width="50" height="50">
            <div class="sc-iwsKbI ceoHNW" color="#6554AF">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path d="M9 22H5v-4H2v12h3v-5h4v5h3V18H9v4zm5-1h3v9h3v-9h3v-3h-9v3zm11 0h3v9h3v-9h3v-3h-9v3zm18-3h-7v12h3v-4h4c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm0 5h-4v-2h4v2z" fill="#6554AF" />
              </svg>
            </div>
          </div>
          Lebenslauf
        </div>
        <div class="card mt-4">
          Lebenslauf
        </div>
        <div class="card mt-4">
          Lebenslauf
        </div>
      </div>
    </div>
    <div class="text-center">
      <a
        href="https://app.feedr.dk/join"
        class="no-underline px-8 py-3 inline-block rounded text-md text-white font-semibold bg-blue hover:bg-blue-light mb-4"
      >
        Start 14 days free trial
      </a>
      <div class="font-light text-spaceblue-light text-sm">
        No credit card needed during trial.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-family: Graphik;
  // font-family: Futura;
  font-weight: 800;
  color: black;
  font-size: 2.3rem;
}

.round {
  font-size: 1.5rem;
  border-radius: 50%;
  background: rgb(233, 233, 245);
}

.card-sm {
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
