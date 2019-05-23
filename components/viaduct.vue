<template>
  <body class="flex flex-col font-thin min-h-screen">
    <header class="mt-10 w-full max-w-5xl mx-auto px-4 lg:px-0" />
    <div
      id="app"
      class="flex flex-col md:flex-row items-center justify-center position-ref flex-1 max-w-6xl mx-auto mt-10 md:mt-0 px-4 md:px-0 lg:mt-10"
    >
      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row justify-center items-end md:items-center lg:items-end">
          <div class="w-4/5 mr-right">
            <img src="~/static/turnitin3.png" class="w-full">
          </div>
          <div class="w-full md:w-2/5 -ml-32 mb-2 mt-4  ">
            <h1 class="leading-tight">
              Es gibt eine bessere Art sich zu 
              <span class="font-medium">
                bewerben
              </span>.
            </h1>
            <p
              class="text-xl my-8 md:pr-10"
            >
              Sign up today for more information and to get exclusive access to the next generation of property software for agents.
            </p>
            <form class="relative">
              <div class="lg:inline-flex px-4 md:px-0 md:pr-12 w-full">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  class="appearance-none focus:outline-none w-full lg:w-2/3 py-2 text-lg px-3 border lg:border-r-0 border-grey rounded lg:rounded-r-none font-sans font-light mb-2 lg:mb-0"
                  aria-required="true"
                  aria-invalid="false"
                >
                <button
                  class="hover:bg-viaduct-dark font-header w-full lg:w-1/3 py-2 bg-viaduct text-white text-md font-light tracking-wider rounded lg:rounded-l-none"
                >
                  <span>Find out more</span>
                </button>
              </div>
              <!---->
              <span
                class="md:absolute left-0 block mt-1 md:ml-3 text-sm font-normal text-red-600"
                style="display: none;"
              />
            </form>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row items-center justify-between max-w-3xl mt-10 md:mt-20 mb-10 mx-auto"
        >
          <span class="w-full md:w-1/3">
            <img src="svg/rightmove.svg" alt="Rightmove Logo" class="mb-8 md:mb-0 h-8 w-full">
          </span>
          <span class="w-full md:w-1/3">
            <img src="svg/primelocation.svg" alt="Primelocation Logo" class="mb-8 md:mb-0 h-8 w-full">
          </span>
          <span class="w-full md:w-1/3">
            <img src="svg/zoopla.svg" alt="Zoopla Logo" class="h-8 w-full">
          </span>
        </div>
        <!-- <hr class="max-w-sm md:max-w-3xl border-t border-gray-300 mb-6 w-full">
        <div class="text-center max-w-4xl mx-auto text-md text-gray-500 mb-4">
          <p>Property management software for estate agents needs a change. It's time for a modern cloud based solution that allows you to quickly and effectively manage your inventory of properties, clients, sales and progression, seamlessly link to third party services, and allow your clients to see viewing feedback and accept offers online. All for a simple monthly fee. Sell homes the better way with Viaduct.</p>
          <p class="mt-2 text-sm">
            Viaduct is a trading name of Marzipan Ltd. © 2019.
          </p>
        </div> -->
      </div>
    </div>
    <script src="/js/app.js" />
  </body>
</template>

<style lang="scss" scoped>
.bg-viaduct {
  background-color: #4dc0b5;
}

.max-w-6xl {
  max-width: 72rem;
}

.max-w-5xl {
  max-width: 64rem;
}
.mr-right {
  margin-right: -24rem;
}
</style>
