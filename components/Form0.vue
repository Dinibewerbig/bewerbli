<template>
  <div>
    <div class="bg-image" />
    <h1 ref="image" class="mt-5">
      Willkommen zum Fragebogen Bewerbungsbrief
    </h1>
    <p>Je ausführlicher du die Fragen beantwortest, desto besser wird dein Brief.</p>
  </div>
</template>

<script>
export default {
  name: 'Form0',
  methods: {
    setFocus: function() {
      this.$refs.image.focus()
    }
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
</style>
