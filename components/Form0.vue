<template>
  <div>
    <div class="bg-image" />
    <h1 class="mt-5">
      Willkommen zum Fragebogen Bewerbungsbrief
    </h1>
    <textarea
      ref="input"
      spellcheck="false"
      autofocus
      placeholder="Antwort eingeben"
    />
    <p>Je ausführlicher du die Fragen beantwortest, desto besser wird dein Brief.</p>
  </div>
</template>

<script>
export default {
  name: 'Form0',
  methods: {
    setFocus: function() {
      this.$refs.input.focus()
    },
    setValue: function() {}
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Univers Light';
  color: rgb(55, 41, 136);
}

.bg-image {
  background-image: url('~assets/download.jpeg');
  display: block;
  height: 300px;
  width: 100%;
  overflow-x: visible;

  background-position: fixed;

  background-position-y: top;
  background-repeat: no-repeat;
}

textarea {
  opacity: 0;
}
</style>
