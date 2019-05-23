
<template>
  <div class="perspective">
    <div :class="{scrolledNavbarHeight: scrolled}" class="navbar  px-24">
      <li class="logo">
        <!-- <transition mode="out-in"> -->
        <div>
          <img
            class="logoImg"
            :class="{scrolledLogo : scrolled}"
            src="~/assets/bewerbliC16.svg"
         
            @click="$router.push('/')" 
          >
        </div>
      </li>

      <span class="nav navSection hoverable" @mouseover="navShow=true" @mouseleave="navShow=false">
        <li
          id="0"
          ref="btn"
          class="button"
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Wie funktioniert's
          <img src="~/assets/nav-chevron-down.svg" class="select-none icon-nav-chevron">
        </li>
        
        <li
          id="1"
          ref="btn"
          class="button"
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Angebot
          <img src="~/assets/nav-chevron-down.svg" class="select-none icon-nav-chevron">
        </li>
        <li
          id="2"
          ref="btn"
          class="button  "
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Kunden
          <img src="~/assets/nav-chevron-down.svg" class="select-none icon-nav-chevron">
        </li>
        <li
          id="3"
          ref="btn"
          class="button "
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Store
          <img src="~/assets/nav-chevron-down.svg" class="select-none icon-nav-chevron">
        </li>
        <li
          id="4"
          ref="btn"
          class="button bord"
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Dashboard
          <img src="~/assets/nav-chevron-down.svg" class="select-none icon-nav-chevron">
        </li>
      </span>

      <div class="group relative">
        <div :class="{'btn2--unpinned': scrolled}" class=" btn2 btn1 border px-2 ml-4 antialiased cursor-pointer" @click="$modal.show('login-modal', { route: '/' })">
          <UnlockIcon /> <span v-if="currentUser">
            {{ userProfile.name }}
          </span>

          <span v-else>
            Melde dich an
          </span>
          <ChevronDownIcon />
        </div>
        <div v-if="currentUser" class="rounded items-end ml-8 absolute border pin-l border-t-0 mt-1 invisible bg-white hover:visible group-hover:visible">
          <ul class="list-reset">
            <div class="px-4 py-2 block text-black hover:bg-grey-light" @click.prevent="logout">
              Logout
            </div>
            </li>
          </ul>
        </div>
      </div>

      <div class=" mt-6 ml-4 relative " />



     
     
      <!-- 
      <nuxt-link
        class="btn2 btn1 border px-2 ml-4 antialiased cursor-pointer"
        :class="{'btn2--unpinned': scrolled}"
        tag="li"
        to="/store"
      >
        Anmelden
      </nuxt-link>
     -->

    

      <li class="mobile item-mobileMenu">
        <tasty-burger-button />
      </li>
    </div>

    <transition name="slide-fade" mode="out-in">
      <div v-if="navShow">
        <div
          :id="className"
          key="nav"
          class="dropdown rounded-lg"
          :style="{ left: offset + 'px' }"
          @mouseover="navShow=true"
          @mouseleave="navShow=false"
        >
          <div class="dropdownArrow" />
          <div>
            <transition name="counter">
              <div>
                <transition-group class="group" :name="direction" mode="out-in">
                  <div
                    v-show="activeTab == 0"
                    id="div0"
                    ref="div"
                    key="cero"
                    class="w-full"
                    @clicked="clickedInDropdown"
                  >
                    <dropdown0 @clicked="clickedInDropdown" />
                  </div>
                  <div
                    v-show="activeTab == 1"
                    id="div1"
                    ref="div"
                    key="one"
                    class="w-full"
                    @clicked="clickedInDropdown"
                  >
                    <dropdown1 @clicked="clickedInDropdown" />
                  </div>
                  <div v-show="activeTab == 2" id="div2" ref="div" key="two" class="w-full">
                    <dropdown2 @clicked="clickedInDropdown" />
                  </div>
                  <div v-show="activeTab ==3" id="div3" ref="div" key="three" class="w-full">
                    <dropdown3 @clicked="clickedInDropdown" />
                  </div>
                  <div v-show="activeTab == 4" id="div4" ref="div" key="four" class="w-full">
                    <dropdown4 @clicked="clickedInDropdown" />
                  </div>
                </transition-group>
              </div>
              </transition-group>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
  </div>
  </div>
  </transition>
  </div>
</template>

<script>
import TastyBurgerButton from '~/components/BurgerButton'
import dropdown4 from '~/components/Dropdown4'
import dropdown3 from '~/components/Dropdown3a'
import dropdown2 from '~/components/Dropdown2'
import dropdown1 from '~/components/Dropdown1'
import dropdown0 from '~/components/Dropdown0'
// import { ArrowRightIcon } from 'vue-feather-icons'
import { ChevronDownIcon } from 'vue-feather-icons'
import { UnlockIcon } from 'vue-feather-icons'
import { mapState } from 'vuex'
const fb = require('~/services/firebaseConfig.js')

export default {
  components: {
    TastyBurgerButton,
    dropdown4,
    dropdown3,
    dropdown2,
    dropdown1,
    dropdown0,
    ChevronDownIcon,
    UnlockIcon
  },
  props: { scrolled: Boolean },
  data() {
    return {
      clicked: false,
      direction: 'tabNext',
      navShow: false,
      previousTab: 1,
      activeTab: 1,
      className: '',
      navbarLeft: null,
      navbarLeft1: null,
      hamburgers: '',
      offset: ''
    }
  },
  computed: {
    ...mapState([
      'userProfile',
      'currentUser',
      {
        user: state => state.currentUser
      }
    ])
  },
  methods: {
    clickedInDropdown() {
      this.navShow = false
    },
    show() {
      this.$modal.show('hello-world')
    },
    hide() {
      this.$modal.hide('hello-world')
    },
    addProgress: function() {
      return true
    }, // todo
    delProgress: function() {
      return true
    },
    select: function(event) {
      this.previousTab = this.activeTab
      this.activeTab = event.target.id
      this.className = 'content-class' + this.activeTab
      this.navbarLeft = event.target.getBoundingClientRect().left
      this.offset = this.navbarLeft - 190

      if (this.previousTab < this.activeTab) {
        this.direction = 'tabNext'
      } else {
        this.direction = 'tabPrev'
      }
    },
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch('clearData')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown2 {
  left: -100px;
}
li:hover .icon-nav-chevron {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.icon-nav-chevron {
  filter: brightness(5);
  vertical-align: top;
  position: relative;
  z-index: -1;
  top: 3px;
  left: 5px;
  width: 0.58rem;
}
.avatar {
  border-radius: 50%;
  height: 35px;
  outline: 0;

  width: 35px;
}

@media only screen and (max-width: 768px) {
  .item-mobileMenu {
    display: flex !important;
  }
}

@media only screen and (max-width: 768px) {
  .nav {
    display: none !important;
  }
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.scrolledLogo {
  width: 124px !important;
}
.logoImg {
  padding-top: 25px;
  width: 140px;
  transition: width 500ms;
  filter: none;
}

ul {
  padding: 0px;
}

a {
  text-decoration: none;
}

.btn2--unpinned {
  cursor: pointer;
}

.btn2--unpinned:hover {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  cursor: pointer;
}

.btn:hover {
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
}

.button:hover {
  color: #ffffff;
}

.btn2:hover {
  color: #ffffff;
}

.button {
  height: 100%;
  padding-top: 35px;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 25px;
}

.btn3 {
  // border: 1px solid rgba(255, 255, 255, 0.5);
}
.btn3:hover {
  // border: 1px solid rgba(255, 255, 255, 0.9);
  background-color: none;
}
.btn2 {
  margin-top: 24px;
  height: 35px;
  line-height: 33px;
  font-family: Muli;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.085em;
  color: #e2e2e2;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  border-radius: 5px;
  text-align: center;
}

.btn1:hover {
  background-color: rgba(255, 255, 255, 0.311);
  border-color: rgba(255, 255, 255, 0.411);
  color: #fff;
}
.headroom--unpinned img {
  // filter: brightness(5);
}
.headroom--unpinned:hover {
  color: rgb(230, 230, 230) !important;
}

h3 {
  line-height: 1.1em !important;
  font-size: 1.1rem;
  font-family: Avenir;
  font-weight: 600;
  padding-top: 3px;
  margin-bottom: 3px;
  // text-transform: uppercase;
}

.container:hover {
  -webkit-filter: grayscale(100%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(100%); /* FF 35+ */
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1170px;
  height: 70px;
}

.scrolledNavbarHeight {
  height: 70px;
}

.navSection {
  position: relative;
}
.logo {
  margin-right: auto;
}

.mobile {
  width: 90px;
}
.item-mobileMenu {
  position: relative;
  width: 90px;
  display: none;
}
.item-mobileMenu:hover {
  opacity: 0.5;
}

li {
  display: block;
  height: 100%;
  padding-right: 1.1rem;
  padding-left: 1.1rem;
}
#content-class0 {
  width: 550px;
  height: 400px;
}
#content-class1 {
  width: 550px;
  height: 400px;
}

#content-class2 {
  width: 550px;
  height: 320px;
}

#content-class3 {
  width: 330px;
  height: 400px;
}
#content-class4 {
  width: 270px;
  height: 400px;
}

a,
button,
input,
select,
textarea {
  -webkit-tap-highlight-color: transparent;
}

.dropdown {
  border-radius: 0.5rem;
  position: absolute;
  background-color: #232f41;
  width: 400px;
  padding: 2rem;
  top: 67px;
  transition: width 200ms, height 200ms, left 300ms, opacity 200ms;

  overflow: visible;
  opacity: 1;
  box-shadow: rgba(82, 95, 127, 0.1);
  z-index: 100000;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11);
}

nav {
  position: absolute;
  top: 0;
  left: 300px;
  height: 50px;
  width: 600px;
}

.dropdownArrow {
  box-sizing: border-box;
  left: 240px;
  top: -6px;
  margin: 0 0 0 -6px;
  position: absolute;
  height: 12px;
  width: 12px;
  transform: rotate(45deg);
  box-shadow: -3px -3px 5px rgba(82, 95, 127, 0.04);
  background-color: #232f41;
  will-change: transform, opacity;
}
.dropdownArrow2 {
  box-sizing: border-box;
  left: 115px;
  top: -6px;
  margin: 0 0 0 -6px;
  position: absolute;
  height: 12px;
  width: 12px;
  transform: rotate(45deg);
  box-shadow: -3px -3px 5px rgba(82, 95, 127, 0.04);
  background-color: #232f41;
  will-change: transform, opacity;
}

.nav-overlay {
  animation: nav-active 280ms cubic-bezier(0.17, 0.67, 0.48, 1.76);
  animation-fill-mode: forwards;
}

.dropdown2 {
  left: -100px;
}

#div0,
#div1,
#div2,
#div3,
#div4,
#div5 {
  position: absolute;
}

.perspective {
  -webkit-perspective: 700px;
  perspective: 700px;
  z-index: 10000;
}
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.tabNext-enter,
.tabNext-leave-to {
  opacity: 0;
}
.tabNext-enter-active {
  transition: opacity 0.3s;
}
.tabNext-leave-active {
  transition: opacity 0.3s;
}
.tabNext-leave,
.tabNext-enter-to {
  opacity: 1;
}

.tabPrev-enter,
.tabPrev-leave-to {
  opacity: 0;
}
.tabPrev-enter-active {
  transition: opacity 0.25s ease-in-out;
}
.tabPrev-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.tabPrev-leave,
.tabPrev-enter-to {
  opacity: 1;
}

.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.3s;
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.3s;
}
.v-enter-to {
  opacity: 1;
}

.text-grey-darkest {
  color: #666875;
}
</style>
