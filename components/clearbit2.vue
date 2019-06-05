<template>
  <div>
    <div class="mx-auto relative bg-batch-gradient pt-32">
      <div class="text-4xl text-center text-white  pt-12 ">
        Unsere intelligenten Fragebögen helfen dir beim Schreiben
      </div>
      <div class="text-xl text-center pb-12 text-white">
        Erkläre uns Lorem ipsum dolor, sit amet cons
      </div>
      <div class="mw8 mx-auto relative">
        <div class="img-underlay-1 br2" />
        <div class="img-underlay-2 br2" />

        <div class="batch-hero-image relative">
          <img src="~/assets/dashboard.png" class="w-initial-l br2 z-20 relative medium-box-shadow">
        </div>
      </div>
    </div>
    <div class="bg-white relative pb-16 z-10 pt-16 -mt-8 nt1">
      <div class="mx-auto w-1/2">
        <div class="text-4xl text-center text-black">
          Bringe wertvolle Informationen
        </div>
        <div class="text-xl f4 mid-gray lh-copy text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti corporis vero porro quam dolores, blanditiis magnam enim nemo sunt sapiente perspiciatis quae commodi ullam eligendi ipsum doloribus temporibus dignissimos quibusdam.
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.lh-copy {
  line-height: 1.7;
}

.mid-gray {
  color: #555;
}
.mw8 {
  max-width: 68rem;
}
.bg-batch-gradient {
  background-image: linear-gradient(336deg, #9684bf, #415f92);
}
.medium-box-shadow {
  box-shadow: 0px 1px 3px 0 rgba(50, 56, 81, 0.1),
    0px 6px 22px 0 rgba(68, 76, 108, 0.12),
    inset 0px -3px 2.5px 0 rgba(69, 78, 114, 0.03);
}
.img-underlay-1 {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 20px;
  left: -20px;
  right: 20px;
  bottom: 0;
  opacity: 0.2;
  background-color: #fff;
  box-shadow: 0px 1.5px 2.5px 0 rgba(37, 47, 58, 0.13),
    0px 12px 27px 0 rgba(37, 54, 70, 0.27);
}

.br2 {
  border-radius: 0.25rem;
}
.batch-hero-image {
  height: 534px;
}

.img-underlay-2 {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 80px;
  left: 20px;
  right: -20px;
  bottom: 0;
  opacity: 0.2;
  background-color: #fff;
  box-shadow: 0px 1.5px 2.5px 0 rgba(37, 47, 58, 0.13),
    0px 12px 27px 0 rgba(37, 54, 70, 0.27);
}

.pt5-l {
  padding-top: 4rem;
}

img {
  max-width: 100%;
  vertical-align: top;
}
</style>
