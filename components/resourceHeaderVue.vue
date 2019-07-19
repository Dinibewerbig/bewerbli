<template>
  <div className="template-wrap">
    <div class="employee-category">
      <div><img class="employee-image" :src="getImage" :alt="getImage"></div><div class="employee-name">
        ' +
        '{{ getEmployeeName(data) }}
      </div><div class="employee-designation">
        {{ getEmployeeDesignation(data) }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResourceHeaderTemplate',
  data() {
    return {
      data: {}
    }
  },
  computed: {
    getImage: function() {
      return (
        './src/schedule/images/' +
        this.getEmployeeName(this.data).toLowerCase() +
        '.png'
      )
    }
  },
  methods: {
    getEmployeeName: function(data) {
      const value = JSON.parse(JSON.stringify(data))
      return value.resourceData
        ? value.resourceData[value.resource.textField]
        : value.resourceName
    },
    getEmployeeDesignation: function(data) {
      const value = JSON.parse(JSON.stringify(data))
      return value.resourceData.Designation
    }
  }
}
</script>
