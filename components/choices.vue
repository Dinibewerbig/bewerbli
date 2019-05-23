<template>
  <div class="container m-auto">
    <div class="w-1/2">
      <cardChoice :class="[selected===1 ? 'bg-white shadow-sm' : 'bg-transparent']" @click.native="select(1)" />
      <cardChoice :class="[selected===2 ? 'bg-white shadow-sm' : 'bg-transparent']" @click.native="select(2)" />
      <cardChoice :class="[selected===3 ? 'bg-white shadow-sm' : 'bg-transparent']" @click.native="select(3)" />
    </div>
    <div class="w-1/2">
      <formanimation />
    </div>
  </div>
</template>

<script>
import cardChoice from '~/components/card-choice'
import formanimation from '~/components/formanimation'
export default {
  components: {
    cardChoice,
    formanimation
  },
  data() {
    return {
      selected: 1
    }
  },
  computed: {},
  methods: {
    select(id) {
      this.selected = id
      console.log(id)
    }
  }
}
</script>
<style lang="scss" scoped>
.shadow-sm {
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 0 1px rgba(0, 0, 0, 0.08);
}

.bg-grey-lightest {
  background-color: #f3f6fa;
}
.hover\:bg-white-dark:hover {
  background-color: #fbfcfd;
}
.shadow-sm {
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 0 1px rgba(0, 0, 0, 0.08);
}

.icon {
  background-color: #65559a;
  width: 3.5rem;
  height: 3.5rem;
}
</style>
