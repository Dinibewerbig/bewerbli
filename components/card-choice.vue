<template>
  <div
    
    class="  text-left p-4  rounded-lg flex group   select-none cursor-pointer"
  >
    <div class="flex w-full">
      <div class="px-2 w-1/5">
        <div
          class="text-xl rounded-full items-center justify-center flex inline-block icon font-bold text-primary"
        >
          <img class="logoImg" src="~/assets/icon1.svg">
        </div>
      </div>
      <div class="px-6">
        <div class="title text-black text-lg font-medium">
          The Coldest Sunset
        </div>
        <p
          class="mid-gray text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      selected: '1'
    }
  },
  computed: {},
  methods: {
    select() {
      console.log('selected in Component')
      // console.log(ref1)
      // this.selected = this.id
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-grey-lightest {
  background-color: #f3f6fa;
}
.hover\:bg-white-dark:hover {
  background-color: #fbfcfd;
}

.mid-gray {
  color: #5e646a;
}

.icon {
  background-color: #65559a;
  width: 3.5rem;
  height: 3.5rem;
}
</style>
