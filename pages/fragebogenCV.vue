<template>
  <div class="container mx-auto py-10">
    <div class=" flex ">
      <div class="">
        <nav class="hidden lg:block  mr-8">
          <ul class="list-reset mb-8">
            <li>
              <div
                class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
              >
                <span :class="{ active: activeTab===1 }">
                  1 Anmeldung 
                </span>
                </a>
              </div>
            </li>
            <li>
              <div
                class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
              >
                <span :class="{ active: activeTab===2 }">
                  2 Firma
                </span>
                </a>
              </div>
            </li>
            <li>
              <div
                class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
              >
                <span :class="{ active: activeTab===3 }">
                  3 Du und der Beruf
                </span>
                </a>
              </div>
            </li>
            <li :class="{ active: activeTab===4 }">
              <div
                class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
              >
                <span>
                  4 Du und deine Firma
                </span>
                </a>
              </div>
            </li>
            <li>
              <div
                class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
              >
                <span :class="{ active: activeTab===5 }">
                  5 Zu dir
                </span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div class="card w-4/5 px-12">
        <nuxt-child :username=" userProfile.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'login',
  computed: {
    ...mapState([
      'userProfile',
      'currentUser',
      'posts',
      'answers',
      'hiddenPosts'
    ]),
    activeTab: function() {
      if (this.$nuxt.$route.name === 'fragebogen-anmeldung') {
        return 1
      } else {
        return 2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: rgba(236, 141, 16, 0.815);
}
.text-grey-darker {
  color: #8a8f9b;
}
.text-grey-dark {
  color: #afb6c4;
}

.fill-current {
  fill: #afb6c4;
}
</style>
