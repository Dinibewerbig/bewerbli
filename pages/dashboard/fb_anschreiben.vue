<template>
  <div class="">
    <div class=" ">
      <div class="block">
        <nav class="hidden lg:block  mr-8">
          <ul class="list-reset flex ">
            <li>
              <div
                class="stepper"
              >
                <span :class="{ active: activeTab===1 }">
                  1 Anmeldung 
                </span>
                </a>
              </div>
            </li>
            <li>
              <div
                class="stepper"
              >
                <span :class="{ active: activeTab===2 }">
                  2 Firma
                </span>
                </a>
              </div>
            </li>
            <li>
              <div
                class="stepper"
              >
                <span :class="{ active: activeTab===3 }">
                  3 Du und der Beruf
                </span>
                </a>
              </div>
            </li>
            <li :class="{ active: activeTab===4 }">
              <div
                class="stepper"
              >
                <span>
                  4 Du und deine Firma
                </span>
                </a>
              </div>
            </li>
            <li>
              <div
                class="stepper"
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

      <div class="bg-white border-grey-light h-full border mt-4 px-12 hoopery ">
        <nuxt-child :username=" userProfile.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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
.stepper {
  @apply flex items-center inline-block p-4 no-underline text-grey-darker  py-2;
}
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

.hoopery {
  max-width: calc(83vw - 100px);
}
</style>
