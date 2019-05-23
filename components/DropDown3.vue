<template>
  <div class="">
    <div class="border-bottom pb-6 mb-6">
      <h2 class="font-normal text-white">
        Blog
      </h2>
    </div>
    <div class="">
      <!-- <p class="alert alert--info mb-8">
        Hier geht es zum Blog. Viel Spass.
      </p>  -->
      <div class="">
        <div class=" pr-10">
          <li class="mb-4 w-full text-white list-reset">
            <time class="mb-0 text-grey-light font-bold uppercase text-sm font-sans tracking-wide">
              February 2019
              |
            </time>

            <a class="no-underline" href="https://christoph-rumpel.com/2019/02/how-i-built-laravel-core-adventures">
              <h2 class="mt-4 mb-2 text-white text-lg lg:text-xl">
                Das richtige Anschreiben - einfach erklärt
              </h2>
            </a>
            <p class="blogsummary hidden text-white text-base md:block">
              Most interesting about a new product, except the product itself, are the little details and decisions that shaped it to what it became. T...
            </p>
          </li>
        </div>
      </div> <div class="">
        <button class=" text-info ">
          <span>Blog Artikel</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: { ArrowRightIcon },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>
