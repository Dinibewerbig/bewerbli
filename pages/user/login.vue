<template>
  <div>
    <div class="container">
      <div class="mt-8 flex justify-between items-center">
        <img width="154" src="~/assets/newlogo2.svg" @click="$router.push('/')">

        <div class="text-white font-thin  ">
          Sign Out
          <button @click="signOut">
            Logout
          </button>
          <a href="/users/sign_in" class="no-underline text-blue-light">
            Sign in
            <font-awesome-icon class="icon-lock icon-fw" :icon="['fas', 'arrow-right']" style="font-size: 15px" />
          </a>
        </div>
      </div>
    </div>
    <div class="container mt-8">
      <h1 class="text-center font-thin text-4xl text-white">
        Erstelle ein Konto
      </h1>
      <p class="text-center opacity-75 font-light text-white">
        Absolut gratis - und ohne Verpflichtungen
      </p>
      <div class="my-10" />
      <div class="flex flex-wrap justify-center">
        <div class="sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/2">
          <section class="card relative flex-grow">
            <div class="card-body rounded  flex-grow flex-shrink flex bg-white p-8">
              <form
                id="signup-form"
                class="simple_form new_user flex-grow"
              >
                <div class="text-grey-darker font-thin text-center">
                  Sign Up mit 
                </div>
                <div class="flex">
                  <button class="facebook p-2 flex-1 rounded mr-8 my-3 ">
                    <img width="24" src="~/assets/facebook.svg" style="fill: #fff" alt="Icon github">
                    <span class="text-white font-thin">
                      Facebook
                    </span> 
                  </button>
                  <button class="flex-grow p-2 flex-1 rounded my-3 border border-grey-light" @click="googleSignIn">
                    <img width="24" src="~/assets/icon-google.svg" alt="Icon google">
                    <span class="font-thin">
                      Google
                    </span>
                  </button>
                </div>
                <div class="line border-b leading-loose mt-8 mb-12 text-grey-darker font-thin my-3 text-center">
                  <span class="pb-12 px-4 bg-white">
                    oder
                  </span> 
                </div>
               
                <div class="input-floating-icon-group form-group">
                  <font-awesome-icon class="icon-lock icon-fw" :icon="['far', 'envelope']" style="font-size: 20px" />
                  <input
                    id="user_email"
                    autofocus="autofocus"
                    required="required"
                    class="w-full invalid"
                    placeholder="Work email"
                    type="email"
                    name="user[email]"
                  >
                </div>
                <!-- <div id="popover1" class="popover absolute" role="tooltip" x-placement="left" style="position: absolute; transform: translate3d(-210px, 180px, 0px); top: 0px; left: 0px; will-change: transform; margin-left: -55px;">
                  <div class="arrow" style="top: 44px;" /><h3 class="popover-header">
                    Invalid email
                  </h3><div class="popover-body">
                    This is not a valid email address, please check and try again
                  </div>
                </div> -->
                <div id="user_password-wrapper">
                  <div class="input-floating-icon-group form-group">
                    <font-awesome-icon class="icon-lock icon-fw" :icon="['fas', 'lock']" style="font-size: 20px" />
                    <input
                      id="user_password"
                      minlength="8"
                      required="required"
                      class="password required form-control w-full"
                  
                      placeholder="Password (at least 8 chars)"
                      type="password"
                      name="user[password]"
                    ><div class="progress ">
                      <div class="progress-bar progress-bar-danger" style="width: 1%;" />
                    </div><span class="password-verdict" />
                  </div>
                </div>
                
                

                <div class="spacer8" />
                <div class="text-center">
                  <button class="">
                    Create an Account
                    <i class="icon-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
            <!-- <div id="popover2" class="popover bs-popover-right fade show" role="tooltip" x-placement="right" style="position: absolute; transform: translate3d(510px, 250px, 0px); top: 0px; left: 0px; will-change: transform;">
              <div class="arrow" style="left: -4px; top: 44px;" /><h3 class="popover-header">
                Invalid password
              </h3><div class="popover-body">
                This password is too short, please enter at least 8 characters
              </div>
            </div> -->
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    emailLogin() {
      this.$store
        .dispatch('signInWithEmail', {
          email: this.formEmail,
          password: this.formPassword
        })
        .then(() => {
          this.formEmail = ''
          this.formPassword = ''
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    googleSignIn() {
      this.$store
        .dispatch('googleSignIn')
        .then(() => {
          console.log('dispatched')
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    signOut() {
      this.$store
        .dispatch('signOut')
        .then(() => {
          console.log('signed out')
        })
        .catch(e => {
          console.log(e.message)
        })
    }
  }
}
</script>

<style lang="css">

.line {
  line-height: 0.1em;
}

.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 237px;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-style: normal;
    font-weight: 300;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 0.3rem;
}


.popover-header {
  padding-bottom: 7px;
    border-bottom: none;
    padding-left: 40px;
    padding: 24px 24px;
    margin-bottom: 0;
    font-size: 14px;
    color: #ff8372;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

.arrow {
  box-sizing: border-box;
       right: calc((0.8rem - 3px) * -1);
  top: -6px;
  margin: 0 0 0 -6px;
  position: absolute;
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  box-shadow: -3px -3px 5px rgba(82, 95, 127, 0.04);
  background-color: rgb(255, 255, 255);
  will-change: transform, opacity;
}

.popover-body {
  padding-top: 0;
    font-size: 12px;
    line-height: 1.67;
    padding: 24px 24px;
    color: #7183a7;
}

input[type='email'].invalid {
  -webkit-box-shadow: inset 2px 0 0 0 #ff6c5f;
    box-shadow: inset 2px 0 0 0 #ff6c5f;
    border-left-color: #ff6c5f;
}

form input {
  border: 1px solid rgba(157, 157, 189, 0.37);
  border-radius: 3px;
  padding: 0.75rem 0.75rem;
  font-size: 14px;
  color: rgb(4, 20, 58);
  line-height: 1.5;
;
  transition-duration: 0.25s;
  font-weight: 300 !important;
}

.input-floating-icon-group {
    position: relative;
}
.icon-fw, [class^="icon-"], [class*=" icon-"] {
    width: 1.28571em;
    text-align: center;
}
.form-group {
    margin-bottom: 1rem;
}
.input-floating-icon-group :first-child {
    position: absolute;
    top: calc(50% - 10px);
    left: 15px;
    pointer-events: none;
    color: #182359;
    font-weight: bold;
    font-size: 19px;
}

.input-floating-icon-group input {
   padding-left: 55px;
}


.facebook {
  background-color: #3b5998
}
</style>
