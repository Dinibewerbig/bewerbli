<template>
  <div class="typed">
    <vue-typed-js
      :strings="['Fehlt dir die Zeit deine Bewerbung selber zu schreiben?^1000',
                 'Wir schreiben dir den passenden Bewerbungsbrief in 24h^1000'
      ]"
      :loop="true"
      :type-speed="25"
      :back-speed="15"
      :back-delay="10"
      :loop-count="1"
      :show-cursor="false"
      :smart-backspace="false"
      :start-delay="1000"
      @onComplete="doSmth()"
    >
      <h4>
        <span class="typing text-weight-bold" />
      </h4>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'TypedText',
  data() {
    return {}
  }
}
</script>

<style scoped>
p {
  font-weight: 100;
  font-size: 23px;
  line-height: 27px;
}

h4 {
  font-size: 34px !important;
  margin-top: 20px !important;
  line-height: 1.3em !important;
}

.typed {
  overflow: hidden;
  height: 120px;
}
</style>
