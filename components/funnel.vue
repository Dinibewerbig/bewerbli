<template>
  <div>
    <div class="center flex flex-column h-100">
      <div class="funnel-container relative flex-none">
        <div class="wave-function absolute bottom-0 left-0" />
        <div class="top-of-funnel " />
      </div>
      <div class="h-100 relative">
        <div class="big-stick collect-stick flex flex-auto h-100 absolute" />
        <div class="blue-pill flex-none no-select">
          <p class="white caps">
            250+ data sources
          </p>
        </div>
      </div>
    </div>
    <div class="dn db-m db-l v-mid w-50">
      <div class="center flex flex-column h-100">
        <div class="h-100 relative">
          <div class="big-stick transform-stick flex flex-auto h-100 absolute" />
          <div class="attr-box">
            <img class="absolute attr-circle-cap" src="/assets/site/v2/our-data/company-attributes.svg">
            <h3 class="tc deep-purple caps no-select">
              55+ company attributes
            </h3>
            <div class="cf placeholder-pill-container relative">
              <div class="placeholder-pill bg-placeholder-gray" style="width: 16%" />
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 24%" />
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 16%" />
              <div class="placeholder-pill bg-placeholder-gray" style="width: 36%" />
            </div>
            <div class="cf placeholder-pill-container relative" style="margin-top: 4px;">
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 36%" />
              <div class="placeholder-pill bg-placeholder-gray" style="width: 16%" />
              <div class="placeholder-pill bg-placeholder-gray" style="width: 24%" />
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 16%" />
            </div>
          </div>
          <div class="attr-box" style="margin-top: 360px;">
            <img class="absolute attr-circle-cap" src="/assets/site/v2/our-data/person-attributes.svg">
            <h3 class="tc light-purple caps no-select">
              40+ person attributes
            </h3>
            <div class="cf placeholder-pill-container relative">
              <div class="placeholder-pill bg-placeholder-gray" style="width: 16%" />
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 24%" />
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 16%" />
              <div class="placeholder-pill bg-placeholder-gray" style="width: 36%" />
            </div>
            <div class="cf placeholder-pill-container relative" style="margin-top: 4px;">
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 36%" />
              <div class="placeholder-pill bg-placeholder-gray" style="width: 16%" />
              <div class="placeholder-pill bg-placeholder-gray" style="width: 24%" />
              <div class="placeholder-pill bg-placeholder-gray-2" style="width: 16%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-100 relative">
      <div class="big-stick verify-stick flex flex-auto h-100 absolute" />
      <div class="tc center relative">
        <div class="attr-box no-select" style="left: 21%;">
          <h3 class="tint-gray caps">
            170,000 Community Members
          </h3>
          <div class="attr-green-highlight">
            <h3 class="white caps">
              Machine learning
            </h3>
          </div>
          <h3 class="tint-gray caps">
            2,500 Person Flexible Q/A Team
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.verify-stick,
.verify-stick::before {
  background-image: linear-gradient(to bottom, #4ec4c3, #fff);
}

.h-100 {
  height: 100%;
}

.center {
  margin-right: auto;
  margin-left: auto;
}
.big-stick,
.big-stick::before {
  left: calc(50% - 3px);
  position: absolute;
  height: 100%;
  width: 6px;
  z-index: 1;
}

.w-50 {
  width: 50%;
}

.v-mid {
  vertical-align: middle;
}
.db-l {
  display: block;
}
.dn {
  display: none;
}

.center {
  margin-right: auto;
  margin-left: auto;
}

.h-100 {
  height: 100%;
}
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.left-0 {
  left: 0;
}
.bottom-0 {
  bottom: 0;
}

.flex-none {
  flex: none;
}
.flex-column {
  flex-direction: column;
}
.flex {
  display: flex;
}

.transform-stick,
.transform-stick::before {
  background-image: linear-gradient(to bottom, #e0d6fd, #4ec4c3);
}
.collect-stick,
.collect-stick::before {
  background-image: linear-gradient(to bottom, #24a9e3, #7accef, #e0d6fd);
}

element.style {
}
.attr-box {
  margin-top: 200px;
  z-index: 1;
  position: absolute;
  left: 25%;
  padding: 1.5rem 0;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 1px 2.9px 0.1px rgba(154, 156, 165, 0.1),
    0 3.5px 17.6px 0.4px rgba(154, 156, 165, 0.25);
  min-width: 19.375rem;
}

.flex-auto {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
}

.blue-pill {
  z-index: 2;
  position: absolute;
  left: calc(50% - 80px);
  top: 3rem;
  padding: 0 1rem;
  border-radius: 7px;
  background-color: #27a7df;
  box-shadow: 0 2px 5px 0 rgba(24, 135, 183, 0.24);
}
.no-select {
  user-select: none;
}
.flex-none {
  flex: none;
}

.flex {
  display: flex;
}

.funnel-container {
  width: 250px;
  height: 250px;
  transform: scale(1.06) rotate(-45deg) translateY(-10.5%) translateX(10.5%);
  margin-right: auto;
  margin-left: auto;
}

.top-of-funnel {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #24a9e3, rgba(0, 0, 0, 0) 20%),
    linear-gradient(90deg, #24a9e3, rgba(0, 0, 0, 0) 20%);
  opacity: 0.12;
  filter: blur(4px);
}

.relative {
  position: relative;
}
.collect-stick,
.collect-stick::before {
  background-image: linear-gradient(to bottom, #24a9e3, #7accef, #e0d6fd);
}

.big-stick::before {
  height: 100%;
  opacity: 0.12;
  z-index: 0;
  content: '';
  width: 48px;
  transform: translateX(calc(-50% + 3px));
  filter: blur(4px);
}

.flex-none {
  flex: none;
}

.wave-function {
  margin: 5%;
  width: 40%;
  height: 40%;
  background-image: linear-gradient(
    90deg,
    #76d0e7 0,
    #45c1e3 20%,
    #5dc0de 25%,
    #4fbddf 40%,
    #3fc0e4 45%,
    #4fbde0 60%,
    #50c2e6 100%
  );
  clip-path: polygon(
    1% 1%,
    11% 6%,
    23% 24%,
    26% 35%,
    28% 46%,
    41% 56%,
    58% 66%,
    68% 74%,
    86% 89%,
    99% 100%,
    0% 100%
  );
  border-radius: 6px;
}
.absolute {
  position: absolute;
}

.w-50 {
  width: 50%;
}

.v-mid {
  vertical-align: middle;
}
</style>
