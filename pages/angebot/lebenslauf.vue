<template>
  <div class="zp-home-banner-wrap zp-home-banner-wrap-before">
    <div class="container mx-auto text-center ">
      <div class="zp-home-left py-32 w-3/4 mx-auto">
        <h1 class="text-5xl font-semibold pb-12">
          Online forms for every business.
        </h1>
        <p class="text-xl font-normal leading-normal mb-12">
          Create and share online forms, configure email alerts, and efficiently manage your data with our integrated apps - it's easier done than said with our intuitive form builder.
        </p>
        <button class="text-xl bg-primary hover:bg-blue-dark text-white font-medium py-2 px-4 rounded">
          Melde dich an für dein Anschreiben
        </button>
      </div>
    </div>
    <div class="promo-sec-wrap">
      <img
        id="zwave-banner"
        src="~/assets/crm-home-wave.svg"
      >
      <div class="content-wrap animated">
        <div class="slide-wrap">
          <div>
            <img
              alt="Free Online Form Builder - Zoho Forms"
              class="dt-slide"
              src="~/assets/forms-home-screen.png"
              srcset="~/assets/forms-home-screen-2x.png 2x"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.zp-home-banner-wrap {
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(216, 229, 254, 1)),
    color-stop(40%, rgba(209, 212, 252, 1)),
    color-stop(73%, rgba(227, 222, 255, 1)),
    color-stop(100%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(216, 229, 254, 1) 0%,
    rgba(209, 212, 252, 1) 40%,
    rgba(227, 222, 255, 1) 73%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(216, 229, 254, 1) 0%,
    rgba(209, 212, 252, 1) 40%,
    rgba(227, 222, 255, 1) 73%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(216, 229, 254, 1) 0%,
    rgba(209, 212, 252, 1) 40%,
    rgba(227, 222, 255, 1) 73%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(216, 229, 254, 1) 0%,
    rgba(209, 212, 252, 1) 40%,
    rgba(227, 222, 255, 1) 73%,
    rgba(255, 255, 255, 1) 100%
  );
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
  top: -5%;
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
  z-index: 1000;
  margin: 0px auto 30px;
  text-align: center;
  overflow: hidden;
}
</style>
