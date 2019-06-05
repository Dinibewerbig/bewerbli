<template>
  <div class="border-top">
    <div class="container justify-between flex flex-row ">
      <div class=" w-full py-32  relative">
        <div class="">
          <video
            class="w-5/6"
            type="video/mp4"
            autoplay=""
            loop=""
            muted=""
            poster=""
          >
            <source src="~/assets/editor.mp4" type="video/mp4">
            </source>
          </video>
        </div>
      </div>
      <div class="w-1/4 py-32 mt-8 ">
        <div class="leading-tight text-4xl font-semibold text-headline">
          Editiere und verändere deine Dokumente 
        </div>
        <div class="text-xl font-normal text-lead my-8 md:pr-10">
          im  Texteditor als Word oder Pdf downloadbar 
        </div>

        <div class="text-xl font-normal text-link btn-arrow">
          im  Texteditor als Word oder Pdf downloadbar 
        </div>
      </div>
    </div>
    <div />  
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
