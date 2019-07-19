<template>
  <div id="status" :class="{'statustemp': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}">
    \
    <span :class="{'statustxt': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}">
      {{ data.Status }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'StatusTemplate',
  data: function() {
    return { data: {}, active: 'Active', inactive: 'Inactive' }
  }
}
</script>
