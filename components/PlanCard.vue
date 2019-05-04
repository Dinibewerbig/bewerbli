<template>
  <div>
    <div ref="card" :class="[!selected ? 'bg-grey-lightest border-primary' : '  hover:bg-grey-lightest']" class="shadow-sm  bg-white  text-left p-4  rounded-lg flex group  border border-grey-light  select-none cursor-pointer" @click="select()">
      <div class="flex items-center w-full">
        <div class="px-2 w-2/5">
          <h2 class="text-xl font-bold text-primary">
            {{ name }}
          </h2>
          <div class="font-medium">
            <span class="text-2xl font-bold">
              {{ price }} .-
            </span>
            <span class="mx-1 text-grey-darker">
              /
            </span>
            <span class="text-grey-darker">
              {{ schedule === 'person' ? 'Person' : 'Klasse' }}
            </span>
          </div>
        </div>
      
        <div class=" px-2 w-3/5">
          <ul class="list-reset text-sm text-navy-lighter font-medium -mb-1">
            <li v-for="feature in features" :key="feature" class="mb-1">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>     
      <div class=" flex justify-start items-center mr-8 relative">
        <div>
          <svg
            v-show="selected"
        
            fill="currentColor"
            class=" block group-hover:hidden h-6 w-6 text-grey "
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path d="M3.93,18.07 C1.33043416,15.5592553 0.287874028,11.8412211 1.20302843,8.34492676 C2.11818284,4.84863244 4.84863244,2.11818284 8.34492676,1.20302843 C11.8412211,0.287874028 15.5592553,1.33043416 18.07,3.93 C21.8597221,7.85378887 21.8055237,14.0908478 17.9481858,17.9481858 C14.0908478,21.8055237 7.85378887,21.8597221 3.93,18.07 Z M16.66,16.66 C19.7859317,13.5340683 19.7859317,8.46593168 16.66,5.34 C13.5340683,2.21406832 8.46593168,2.21406832 5.34,5.34 C2.21406832,8.46593168 2.21406832,13.5340683 5.34,16.66 C8.46593168,19.7859317 13.5340683,19.7859317 16.66,16.66 Z M12,10 L12,6 L10,6 L10,10 L6,10 L6,12 L10,12 L10,16 L12,16 L12,12 L16,12 L16,10 L12,10 Z" />
          </svg>
          <svg
            v-show="selected"
            fill="currentColor"
            class="hidden group-hover:block h-6 w-6 text-grey"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
          </svg>
          <svg
            v-show="!selected"
            fill="currentColor"
            class=" h-6 w-6 text-green"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path d="M17.0786623,17.0786623 C20.9856426,13.1716821 20.9856426,6.83721547 17.0786623,2.9302352 C13.1716821,-0.976745067 6.83721547,-0.976745067 2.9302352,2.9302352 C-0.976745067,6.83721547 -0.976745067,13.1716821 2.9302352,17.0786623 C6.83721547,20.9856426 13.1716821,20.9856426 17.0786623,17.0786623 Z M4,10.8 L5.2,9.6 L8.2,12.6 L14.8,6 L16,7.2 L8.2,15 L4,10.8 Z" />
          </svg>
        </div>
      </div>
    </div>
    <div @click="add()">
      <svg
        v-show="!selected"
        fill="currentColor"
        class=" h-6 w-6 text-grey add"
        version="1.1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M3.93,18.07 C1.33043416,15.5592553 0.287874028,11.8412211 1.20302843,8.34492676 C2.11818284,4.84863244 4.84863244,2.11818284 8.34492676,1.20302843 C11.8412211,0.287874028 15.5592553,1.33043416 18.07,3.93 C21.8597221,7.85378887 21.8055237,14.0908478 17.9481858,17.9481858 C14.0908478,21.8055237 7.85378887,21.8597221 3.93,18.07 Z M16.66,16.66 C19.7859317,13.5340683 19.7859317,8.46593168 16.66,5.34 C13.5340683,2.21406832 8.46593168,2.21406832 5.34,5.34 C2.21406832,8.46593168 2.21406832,13.5340683 5.34,16.66 C8.46593168,19.7859317 13.5340683,19.7859317 16.66,16.66 Z M12,10 L12,6 L10,6 L10,10 L6,10 L6,12 L10,12 L10,16 L12,16 L12,12 L16,12 L16,10 L12,10 Z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['schedule', 'name', 'price', 'features'],
  data() {
    return {
      selected: 'false',
      styleObject: {}
    }
  },
  computed: {},
  methods: {
    select() {
      if (this.selected) {
        this.$emit('select')
        this.selected = !this.selected
      } else {
        this.$emit('deselect')
        this.selected = !this.selected
      }
    },
    add() {
      this.$emit('select')
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
.add {
  position: absolute;
  right: 35px;
  transform: translateY(-57px);
}
.bg-grey-lightest {
  background-color: #f3f6fa;
}
.hover\:bg-white-dark:hover {
  background-color: #fbfcfd;
}
</style>
