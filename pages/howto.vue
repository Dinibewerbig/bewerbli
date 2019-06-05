<template>
  <div>
    <nuxt-child class="" />
    <footer1 />
  </div>
</template>

<script>
import footer1 from '~/components/footer'

export default {
  layout: 'default2',
  components: {
    footer1
  }
}
</script>
<style lang="scss" scoped>
</style>
