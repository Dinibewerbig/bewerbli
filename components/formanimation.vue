<template>
  <div class="autofill-form-wrap">
    <div class="autofill-form-demo no-select">
      <div class="autofill-form-shown">
        <h3 class="autofill-form-title">
          Form
        </h3>
        <div class="autofill-form-inputs">
          <div data-autofill="andrew@clearbit.com" class="autofill-form-input">
            andrew@clearbit.com
          </div>
          <div id="autofill-country-to-placeholder" class="autofill-placeholder" style="display: none;" />
        </div>
        <div class="autofill-form-button">
          <img src="/assets/site/v2/svg/fast-arrow.svg" class="icon-fast-arrow">
        </div>
        <span class="autofill-form-top-label">
          Shown
        </span>
      </div>
      <div class="autofill-form-hidden">
        <div class="autofill-form-hidden-inputs">
          <div class="autofill-form-hidden-input">
            <span class="autofill-form-label">
              Title
            </span>
            <div class="autofill-filled-data fade-in-1">
              <span class="autofill-form-text">
                Chief Marketing Officer
              </span>
              <img src="/assets/site/v2/svg/light-blue-circle-check.svg" class="icon-light-blue-circle-check">
            </div>
          </div>
          <div class="autofill-form-hidden-input">
            <span class="autofill-form-label">
              Company
            </span>
            <div class="autofill-filled-data fade-in-2">
              <span class="autofill-form-text">
                Clearbit
              </span>
              <img src="/assets/site/v2/svg/light-blue-circle-check.svg" class="icon-light-blue-circle-check">
            </div>
          </div>
          <div class="autofill-form-hidden-input">
            <span class="autofill-form-label">
              Employee Count
            </span>
            <div class="autofill-filled-data fade-in-3">
              <span class="autofill-form-text">
                40
              </span>
              <img src="/assets/site/v2/svg/light-blue-circle-check.svg" class="icon-light-blue-circle-check">
            </div>
          </div>
        
          <div id="autofill-country-from-placeholder" class="autofill-placeholder" style="display: none;" />
          <div id="autofill-country" class="autofill-form-hidden-input autofill-form-empty" style="">
            Country
          </div>
        </div>
        <div class="autofill-form-bottom-label">
          Hidden <span>Autofill</span>
        </div>
      </div>
      <div class="autofill-form-steps">
        <span id="autofill-step-1" class="autofill-form-step active" />
        <span id="autofill-step-2" class="autofill-form-step" />
      </div>
    </div>
  </div>
</template>
