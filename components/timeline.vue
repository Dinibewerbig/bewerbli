<template>
  <div class="col col-lg">
    <div class="sp-marginbottom--md">
      <div class="pricing-timeline">
        <div class="timeline-item">
          <div class="timeline-icon" style="background-image: url('//images.ctfassets.net/fo9twyrwpveg/4Tv8DVQ1tuGMGGKAYME6MG/35ef6abcc589384d8b58fe9cdcd272b5/material-icon_jade-round-code.svg');" />
          <div class="timeline-content">
            <p class="fontweight-demibold sp-marginbottom--sm">
              Create a website repository
            </p>
            <p class="lineheight-copy">
              This step will create a space with sample content for you. Copy the repository to get started.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-line" />
        </div>
        <div class="timeline-item">
          <div class="timeline-icon" style="background-image: url('//images.ctfassets.net/fo9twyrwpveg/5EKq4KqRGgM0soGYk2g4ow/2595b509fbc1da8f79931255bcdd1088/material-icon_jade-round-art_track.svg');" />
          <div class="timeline-content">
            <p class="fontweight-demibold sp-marginbottom--sm">
              Explore website content structure
            </p>
            <p class="lineheight-copy">
              Learn how Contentful powers content by viewing the relationship between code snippets and the data model with the live website.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-line" />
        </div>
        <div class="timeline-item">
          <div class="timeline-icon" style="background-image: url('//images.ctfassets.net/fo9twyrwpveg/3CpgmJY9s4UWYyqSWGWgEM/823867f45928214942c343cfa5e09085/material-icon_jade-round-publish.svg');" />
          <div class="timeline-content">
            <p class="fontweight-demibold sp-marginbottom--sm">
              Deploy first sample website
            </p>
            <p class="lineheight-copy">
              Select a hosting service option and follow the CLI commands to see the website live. Continue learning by modifying the content in the next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.col,
.custom_mkto_form .mktoFormRow:first-of-type .mktoFormCol {
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  min-width: 0;
  padding: 0 8px;
}

.inner-border.-lightgrey {
  --borderBackground: #e5ebed;
}

.inner-border.-thin {
  --borderSize: 2px;
}

.inner-border.-lightgrey {
  --borderBackground: #e5ebed;
}

.inner-border.-thin {
  --borderSize: 2px;
}

.pricing-timeline .timeline-item {
  height: 72px;
  align-items: center;
  flex-direction: row;
}

.pricing-timeline > .timeline-item {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

element.style {
  background-image: url(//images.ctfassets.net/fo9twyrwpveg/4Tv8DVQ1tuGMGGKAYME6MG/35ef6ab…/material-icon_jade-round-code.svg);
}
.pricing-timeline > .timeline-item > .timeline-line {
  padding-left: 27px;
  height: 150%;
  border-right: 2px dotted #d3dce0;
}

.inner-border.-lightgrey {
  --borderBackground: #e5ebed;
}

.inner-border.-thin {
  --borderSize: 2px;
}

.pricing-timeline > .timeline-item > .timeline-icon {
  z-index: 1;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 50%;
  border-radius: 50%;
  border: 2px solid #d3dce0;
  background-color: #fff;
  height: 56px;
  width: 56px;
  flex: none;
}

.pricing-timeline > .timeline-item {
  height: 72px;
  align-items: center;
  flex-direction: row;
}

.pricing-timeline > .timeline-item > .timeline-content {
  margin: 0 0 0 24px;
}
</style>
