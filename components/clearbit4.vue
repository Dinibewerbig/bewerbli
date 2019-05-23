<template>
  <div class="bg-purple forms-hero">
    <div class="purple-gradient ">
      <div class="mx-auto w-1/2 mt-32 relative">
        <div class="">
          <h1 class="fade-in-up text-center text-6xl font-normal text-white no-delay  ">
            Do more with smarter forms
          </h1>
          <p class="mt-8 fade-in-up text-center text-white long td2 ">
            Shorten forms to capture more leads, without losing the data you need
          </p>

          <div class="fade-in-up text-center long td3 mt-16">
            <a class="big-purple-button" href="https://x.clearbit.com">
              Try it now
            </a>
          </div>
        </div>
      </div>

      <div class="mx-auto w-1/2 relative mt-16">
        <div class="hero-input items-center mx-auto flex fade-in-up ">
          <div class="hero-input-email-icon">
            <img src="~/assets/envelope-chevron.svg">
          </div>
          <div class="hero-input-text">
            bewerbli.ch
          </div>
          <div class="hero-input-cursor blink" />
          <img src="~/assets/ribbon.svg" class="icon-ribbon">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blink {
  animation: 1s blink-animation step-end infinite;
}
.hero-input-cursor {
  position: relative;
  top: 1px;
  margin-left: 3px;
  width: 3px;
  border-radius: 3px;
  background-color: #3386ee;
  height: 30px;
}
.hero-input .icon-ribbon {
  position: absolute;
  right: 20px;
  height: 100px;
}
.big-purple-button {
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.1px;
  color: #fff;
  text-decoration: none;
  padding: 12px 60px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #9f80d5;
  box-shadow: 0 -1px 0px rgba(255, 255, 255, 0.5),
    0 7px 13px 0 rgba(84, 52, 112, 0.85);
  display: inline-block;
  transition: 0.2s background, 0.2s box-shadow, 0.3s transform;
  text-shadow: 0px -1px 0px rgba(84, 52, 112, 0.3);
}
.forms-hero {
  margin-top: -100px;
}

.bg-purple {
  background-color: #334274;
}

.forms-hero .purple-gradient {
  padding-top: 140px;
}

.forms-hero .purple-gradient {
  position: relative;
  height: 710px;
}

.purple-gradient {
  background-image: -webkit-linear-gradient(
    150deg,
    rgba(103, 77, 153, 0) 30%,
    #924ea9 65%,
    #844b98
  );
  background-image: -moz-linear-gradient(
    150deg,
    rgba(103, 77, 153, 0) 30%,
    #924ea9 65%,
    #844b98
  );
  background-image: -ms-linear-gradient(
    150deg,
    rgba(103, 77, 153, 0) 30%,
    #924ea9 65%,
    #844b98
  );
  background-image: -o-linear-gradient(
    150deg,
    rgba(103, 77, 153, 0) 30%,
    #924ea9 65%,
    #844b98
  );
  background-image: linear-gradient(
    150deg,
    rgba(103, 77, 153, 0) 30%,
    #924ea9 65%,
    #844b98
  );
}
.fade-in-up.td1,
.fade-in-down.td1 {
  transition-delay: 0.2s;
}

.no-delay .fade-in-up,
.no-delay .fade-in-down {
  transition-delay: 0s;
}

.fade-in-up.long,
.fade-in-down.long {
  transition: 1s opacity, 1s transform;
}

.loaded .fade-in-up,
.loaded .fade-in-down {
  opacity: 1;
  transform: none;
}
.fade-in-up {
  transform: translateY(40px);
}
.fade-in-up,
.fade-in-down {
  opacity: 1;
  transition: 1s opacity, 1s transform;
}

.fade-in-up.td4,
.fade-in-down.td4 {
  transition-delay: 0.8s;
}
.fade-in-up.long,
.fade-in-down.long {
  transition: 1s opacity, 1s transform;
}

.fade-in-up.long,
.fade-in-down.long {
  transition: 1s opacity, 1s transform;
}
.hero-input {
  z-index: 3;
  position: relative;
  text-align: left;
  max-width: 530px;
  padding: 20px 40px;
  border-radius: 18px;
  box-shadow: 0 14px 26px 0 rgba(30, 38, 60, 0.26),
    0 7px 19px 0 rgba(51, 43, 77, 0.52);
  background-color: #fff;
  border: solid 3px #eae9ff;
  color: #6d728a;
  font-weight: 500;
  font-size: 26px;
}

.hero-data-points {
  z-index: 1;
  display: inline-flex;
  margin-top: -10px;
}

.hero-input-email-icon {
  padding: 6px 4px 4px 4px;
}
.hero-input-email-icon {
  height: 24px;
  margin-right: 20px;
  margin-left: -10px;
  border-radius: 4px;
  padding: 4px;
  background-image: linear-gradient(160deg, #8eb6ff, #b890c8);
  box-shadow: 0 2px 6px 0 rgba(27, 24, 46, 0.16);
}
</style>
