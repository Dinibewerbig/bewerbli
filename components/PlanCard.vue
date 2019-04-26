<template>
  <button
    type="button" 
    class="leading-tight bg-white focus:outline-none focus:shadow-outline text-left block w-full  rounded-lg px-6 py-4 mb-4 relative"
    :class="[selected ? 'bg-grey' : 'opacity-50 hover:opacity-100 hover:shadow-outline']"
    @click="$emit('select')"
  >
    <div class="flex items-center -mx-4">
      <div class="px-4 w-2/5">
        <h2 class="text-lg font-medium mb-2">
          {{ name }}
        </h2>
        <div class="font-medium">
          <span class="text-3xl font-bold">
            CHF{{ price }}
          </span>
          <span class="mx-1">
            /
          </span>
          <span>{{ schedule === 'monthly' ? 'Person' : 'Klasse' }}</span>
        </div>
      </div>
      <div class="px-4 w-3/5">
        <ul class="list-reset text-sm text-navy-lighter font-medium -mb-1">
          <li v-for="feature in features" :key="feature" class="mb-1">
            {{ feature }}
          </li>
        </ul>
      </div>
      <!-- <div v-show="selected" class="flex pin-l pin-y flex items-center">
        <svg class="h-8 w-8 -ml-4 bg-white rounded-full" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M20.49,3.51l-9.98275e-08,-9.94815e-08c-4.69442,-4.67815 -12.2924,-4.66496 -16.9705,0.029463c-4.67815,4.69442 -4.66496,12.2924 0.029463,16.9705c4.6829,4.66667 12.2582,4.66667 16.9411,-1.98963e-07l-1.99655e-07,1.98963e-07c4.69442,-4.67815 4.70761,-12.2761 0.029463,-16.9705c-0.00980385,-0.00983795 -0.0196248,-0.0196589 -0.0294627,-0.0294627Zm-2.73,5.14l-6.61,7.71l-4.75,-3.56l-6.60367e-08,-4.95276e-08c-0.441828,-0.331371 -0.531371,-0.958172 -0.2,-1.4c0.331371,-0.441828 0.958172,-0.531371 1.4,-0.2l3.25,2.44l5.39,-6.29l-3.71146e-08,4.33955e-08c0.358985,-0.419736 0.990264,-0.468985 1.41,-0.11c0.419736,0.358985 0.468985,0.990264 0.11,1.41Z" fill="green" />
        </svg>
      </div> -->
      <div v-show="selected" class="flex pin-l pin-y flex items-center">
        <svg class="h-8 w-8 -ml-4  rounded-full" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" fill="#fff" />
        </svg>
      </div>
      <div v-show="selected" class="flex pin-l pin-y flex items-center">
        <svg class="h-8 w-8 -ml-4  rounded-full" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
        </svg>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: ['schedule', 'name', 'monthly', 'yearly', 'selected', 'features'],
  computed: {
    price() {
      return {
        monthly: this.monthly,
        yearly: this.yearly
      }[this.schedule]
    }
  }
}
</script>
