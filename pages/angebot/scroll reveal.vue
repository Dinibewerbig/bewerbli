<template>
  <div class="h-full w-full flex justify-center" style="height: 100vh;">
    <div class=" self-center ">
      <h1>
        hello Titelblatt
      </h1>
      <section>
        <h1>Scroll down!</h1>
      </section>

      <!-- This section will reveal itself each time it's scrolled into view -->
      <section v-scroll-reveal.reset>
        <h1>Tada!</h1>
      </section>

      <!-- Element-specific configuration options can be passed like this -->
      <section v-scroll-reveal.reset="{ delay: 250 }">
        <h1>Slightly late tada!</h1>
      </section>

      <section v-scroll-reveal.reset>
        <h1>Tada!</h1>
      </section>

      <section v-scroll-reveal.reset="{ delay: 250 }">
        <h1>Slightly late tada!</h1>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default2'
}
</script>

<style>
section {
  height: 100vh;
}
</style>
