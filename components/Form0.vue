<template>
  <div class='mx-4'>
    <div class="bg-image" />
    <div class="flex-1  text-xl leading-normal tracking-wide text-black mx-8">
      <div
        class="text-black font-bold mb-4 tracking-normal uppercase"
      >
        Willkommen zum Fragebogen für das Anschreiben
      </div>
      <p class="text-grey-darkest font-thin mb-6">
        Die hier gemachten Angaben helfen uns für dich den perfekten Bewerbungsbrief zu formulieren. Bitte beantworte die Fragen so ausfuührlich wie möglich. Viel Spass.
      </p>
      <p class="text-grey-darkest">
        Zeitaufwand: ca. 15 min
      </p>
    </div>
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
    setValue(active) {}
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
