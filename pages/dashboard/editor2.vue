<template>
  <div id="app">
    <ejs-documenteditorcontainer id="container" ref="documenteditor" style="width: 100%;height: 590px" :enable-toolbar="true" />"
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  provide: {},

  mounted() {
    this.$refs.documenteditor.ej2Instances.documentEditor.resize()
  }
}
</script>
<style>
@import '../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css';
.e-de-ctnr-toolbar {
  display: none !important;
}
</style>
