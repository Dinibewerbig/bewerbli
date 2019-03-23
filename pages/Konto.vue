<template>
  <div>
    <div>Konto Page</div>
    <nuxt-child :key="$router.fullPath" />
  </div>
</template>
<script>
export default {
  layout: 'container'
}
</script>
