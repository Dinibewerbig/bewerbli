<template>
  <div class="container-lg content-center justify-between flex flex-row ">
    <div class="w-2/5 self-center py-32 ">
      <div class="text-4xl  text-black">
        Bringe wertvolle Informationen
      </div>
      <div class="text-xl  mid-gray text-white">
        Erkläre uns Lorem ipsum dolor, sit amet cons
      </div>
    </div>
    <div class=" w-1/2 py-32 self-center relative">
      <div class="relative">
        <div class="dib bg-white br3 br--top bl bt br b--black-05 center batch-browser">
          <div class="bb b--black-05 relative tc pa3">
            <div class="style absolute br-100 mr1 dib bg-black-10" style="height:.5rem;width:.5rem;left:20px;top:20px;" />
            <div class="style absolute br-100 mr1 dib bg-black-10" style="height:.5rem;width:.5rem;left:35px;top:20px;" />
            <div class="style absolute br-100 mr1 dib bg-black-10" style="height:.5rem;width:.5rem;left:50px;top:20px;" />

            <h3 class="relative top-px-2 f6 o-80 normal gray ">
              Bewerbli 
            </h3>
          </div>

          <div class="pa3">
            <img src="~/assets/report.png" class="br2 br--top">
          </div>
        </div>
      </div>
      <div class="absolute absolute--fill bg-near-white-fade-up batch-browser-fade-overlay" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.batch-browser-fade-overlay {
  bottom: -5%;
}

.bg-near-white-fade-up {
  background-image: linear-gradient(
    to top,
    #f6f9fc 5%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(255, 255, 255, 0) 50%
  );
}
.mid-gray {
  color: #555;
}
.absolute {
  position: absolute;
}

.absolute--fill {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.pa3 {
  padding: 1rem;
}
.batch-browser {
  box-shadow: 0px -8px 32px 0 rgba(68, 76, 108, 0.13);
}
.bg-white {
  background-color: #fff;
}
.center {
  margin-right: auto;
  margin-left: auto;
}
.bg-white {
  background-color: #fff;
}
.dib {
  display: inline-block;
}
.bl {
  border-left-style: solid;
  border-left-width: 1px;
}
.br {
  border-right-style: solid;
  border-right-width: 1px;
}
.bt {
  border-top-style: solid;
  border-top-width: 1px;
}
.br--top {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.br3 {
  border-radius: 0.5rem;
}
.b--black-05 {
  border-color: rgba(0, 0, 0, 0.05);
}

.tc {
  text-align: center;
}
.pa3 {
  padding: 1rem;
}
.relative {
  position: relative;
}
.bb {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.b--black-05 {
  border-color: rgba(0, 0, 0, 0.05);
}

.mr1 {
  margin-right: 0.25rem;
}
.bg-black-10 {
  background-color: rgba(0, 0, 0, 0.1);
}
.absolute {
  position: absolute;
}
.dib {
  display: inline-block;
}
.br-100 {
  border-radius: 100%;
}

.f6 {
  font-size: 0.875rem;
}
.mv0 {
  margin-top: 0;
  margin-bottom: 0;
}
.gray {
  color: #777;
}
.relative {
  position: relative;
}
.o-80 {
  opacity: 0.8;
}
.normal {
  font-weight: normal;
}
.top-px-2 {
  top: 2px;
}

.pa3 {
  padding: 1rem;
}

.br--top {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.br2 {
  border-radius: 0.25rem;
}

img {
  max-width: 100%;
  vertical-align: top;
}
</style>
