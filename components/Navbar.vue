
<template>
  <div class="perspective">
    <div :class="{scrolledNavbarHeight: scrolled}" class="navbar px-24">
      <li class="logo">
        <!-- <transition mode="out-in"> -->
        <div>
          <img
            class="logoImg"
            :class="{scrolledLogo : scrolled}"
            src="~/assets/newlogo2.svg"
            @click="$router.push('/')"
          >
        </div>
       
        <!-- </transition> -->
      </li>

      <span class="nav navSection hoverable" @mouseover="navShow=true" @mouseleave="navShow=false">
        <!-- <div v-if="!scrolled"> -->
        <li
          id="1"
          ref="btn"
          class="button antialiased"
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Kunden
        </li>
        <li
          id="2"
          ref="btn"
          class="button antialiased"
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Produkte
        </li>
        <li
          id="3"
          ref="btn"
          class="button antialiased"
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Blog
        </li>
        <li
          id="4"
          ref="btn"
          class="button bord antialiased"
          :class="{'headroom--unpinned': scrolled}"
          @mouseover="select"
        >
          Dashboard
        </li>
        <!-- </div> -->

        <!-- <nuxt-link
          class="btn bord antialiased"
          :class="{'headroom--unpinned': scrolled}"
          to="/user/login"
        >
          Konto
        </nuxt-link> -->
      </span>
     
      <nuxt-link
        class="btn2 btn1 bg-green px-2 ml-4  antialiased cursor-pointer"
        :class="{'btn2--unpinned': scrolled}"
        tag="li"
        to="/store/cart1"
      >
        EINKAUF
      </nuxt-link>
      <nuxt-link
        v-if="!user"
        class="btn2 btn3 antialiased ml-2 cursor-pointer"
        :class="{'btn2--unpinned': scrolled}"
        tag="li"
        to="/store/cart1"
      >
        Los geht's!
      </nuxt-link>
  
    
      <div class="group mt-6 ml-4 relative ">
        <img v-if="user" class="avatar cursor-pointer" :src="user.photoURL" alt="avatar">
        <div class="dropdown2 rounded items-center absolute border pin-l border-t-0 mt-4 bg-white invisible group-hover:visible">
          <div class="dropdownArrow2" />
          <ul class="list-reset">
            <li>
              <nuxt-link to="/user/dashboard" />Dashboard</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/settings" />Settings</nuxt-link>
            </li>
            <li>
              <div class="px-4 py-2 block text-black hover:bg-grey-light" @click="logout">
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
 
      
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
                  <div v-show="activeTab == 1" id="div1" ref="div" key="one" @clicked="clickedInDropdown">
                    <dropdown2 @clicked="clickedInDropdown" />
                  </div>
                  <div
                    v-show="activeTab == 2"
                    id="div2"
                    ref="div"
                    key="two"
                    class="w-full"
                  >
                    <dropdown1 @clicked="clickedInDropdown" /> 
                  </div>
                  <div v-show="activeTab ==3" id="div3" ref="div" key="three">
                    <dropdown3 @clicked="clickedInDropdown" />
                  </div>
                  <div v-show="activeTab == 4" id="div4" ref="div" key="four">
                    <dropdown4 @clicked="clickedInDropdown" />
                  </div>
                  <div v-show="activeTab ==5" id="div5" ref="div" key="five">
                    <div>
                      <ul>
                        <li class="container mt-8">
                          <a href>
                            <div class="flex items-stretch">
                              <div class="float-left">
                                <p
                                  class="mb-2"
                                />
                                <h3>
                                  <span class="w-16 float-left">
                                    <font-awesome-icon icon="sign-in-alt" style="font-size: 20px" />
                                  </span>
                                  <nuxt-link
                                 
                                  
                                    to="/user/login"
                                  >
                                    Sign Up
                                  </nuxt-link>
                                </h3>
                                <h3>
                                  <span class="w-16 float-left">
                                    <font-awesome-icon icon="sign-in-alt" style="font-size: 20px" />
                                  </span>
                                  <nuxt-link
                                 
                                  
                                    to="/user/login"
                                  >
                                    Login
                                  </nuxt-link>
                                </h3>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition-group>
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
import dropdown3 from '~/components/Dropdown3'
import dropdown2 from '~/components/Dropdown2'
import dropdown1 from '~/components/Dropdown1'
import { mapState } from 'vuex'
const fb = require('~/services/firebaseConfig.js')

export default {
  components: {
    TastyBurgerButton,

    dropdown4,
    dropdown3,
    dropdown2,
    dropdown1
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
    ...mapState({
      user: state => state.currentUser
    })
  },
  methods: {
    clickedInDropdown() {
      this.navShow = false
    },
    show() {
      this.$modal.show('hello-world')
      console.log('helloworld')
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
      // console.log(this.previousTab);
      // console.log(this.activeTab);

      // console.log(event.target.getBoundingClientRect());
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
  width: 140px !important;
}
.logoImg {
  padding-top: 32px;
  width: 145px;
  transition: width 0.3s;
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
  background-color: #fff !important;
  color: #4d5270 !important;
  cursor: pointer;
}

.btn:hover {
  color: #fff;
  cursor: pointer;
}

.button {
  padding-top: 35px;
  display: inline-block;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-family: Avenir Next;
  font-size: 15px;
  color: #cccccc;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-bottom: 25px;
}

.btn3 {
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.btn3:hover {
  border: 1px solid rgba(255, 255, 255, 0.9);
  background-color: none;
}
.btn2 {
  margin-top: 25px;
  height: 38px;
  line-height: 37px;
  font-family: Muli;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.085em;
  color: #fcfcfc;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;

  // background-color: #26f3d1;
  border-radius: 3px;
  text-align: center;
}

.btn1:hover {
  background-color: #0dbe42;
  color: #fff;
}
.headroom--unpinned {
}
.headroom--unpinned:hover {
  color: rgb(230, 230, 230) !important;
}

h3 {
  line-height: 1.1em !important;
  font-size: 1rem;
  color: #434257;
  font-family: Muli;
  font-weight: 500;
  padding-top: 3px;
  margin-bottom: 3px;
  // text-transform: uppercase;
}

.container:hover {
  -webkit-filter: grayscale(100%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(100%); /* FF 35+ */
}

p {
  font-family: Avenir Next;
  letter-spacing: 0.02em;
  font-size: 0.7rem;
  font-weight: 500;
  color: #3f3f3fbe;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1070px;
  height: 80px;
}

.scrolledNavbarHeight {
  height: 72px;
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

#content-class1 {
  // width: 296px;
  // height: 543px;
}

#content-class2 {
  width: 650px;
  height: 470px;
}

#content-class3 {
  width: 430px;
  height: 330px;
}

#content-class4 {
  width: 430px;
  height: 230px;
}

#content-class5 {
  width: 430px;
  height: 330px;
}

a,
button,
input,
select,
textarea {
  -webkit-tap-highlight-color: transparent;
}

div.dropdown {
  border-radius: 0.5rem;
  position: absolute;
  background-color: #ffffff;
  height: 300px;
  width: 400px;
  transition: width 200ms, height 200ms, left 300ms, opacity 200ms;
  margin-top: -1px;
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
  background-color: rgb(255, 255, 255);
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
  background-color: rgb(255, 255, 255);
  will-change: transform, opacity;
}

.dropdown2 {
  left: -100px;
}

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
