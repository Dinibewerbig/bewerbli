<template>
  <div class="bg-grad">
    <clearbit2 class="mt " />
  </div>
</template>
<script>
import clearbit2 from '~/components/clearbit2'
export default {
  layout: 'default2',
  components: { clearbit2 }
}
</script>
<style lang="scss" scoped>
.mt {
  margin-top: 120px;
}

.bg-gradient {
  background: linear-gradient(
    to bottom,
    rgba(190, 208, 255, 1) 0%,
    rgba(255, 220, 253, 1) 51%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
