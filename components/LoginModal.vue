
<template>
  <modal 
    name="login-modal"
    transition="nice-modal-fade"
    :delay="100"
    :adaptive="true"
    height="auto"
    classes="demo-modal-class"
  >
    <div class="card card--simple">
      <div class="col2 " :class="{ 'signup-form': !showLoginForm && !showForgotPassword }">
        <form v-if="showLoginForm" @submit.prevent>
          <div class="card-header">
            <h1>Social Login</h1>
          </div>
          <div class="card-body border-b">
            <div class="mb-6">
              <label class="form-label" for="email1">
                Email
              </label>
              <input id="email1" v-model.trim="loginForm.email" class="form-input" type="text" placeholder="you@email.com">
            </div>
            <div class="mb-6">
              <label class="form-label" for="password1">
                Password
              </label>
              <input id="password1" v-model.trim="loginForm.password" class="form-input" type="password" placeholder="******">
            </div>
            <button class="button btn btn--primary w-full p-4 tracking-wider" @click="login">
              Log In
            </button>
          </div>
          <div class="card-footer">
            <div class="text-center">
              <a class=" text-primary hover:text-primary-dark no-underline" @click="togglePasswordReset">
                Forgot Password
              </a>
              <a class=" font-bold text-primary hover:text-primary-dark no-underline" @click="toggleForm">
                Create an Account
              </a>
            </div>
          </div>
        </form>
        <form v-if="!showLoginForm && !showForgotPassword" @submit.prevent>
          <div class="card-header">
            <h1>Los geht's</h1>
          </div>
          <div class="card-body border-b">
            <div class="mb-6">
              <label class="form-label" for="name">
                Name
              </label>
              <input id="name" v-model.trim="signupForm.name" class="form-input" type="text" placeholder="">
            </div>
            
            <div class="mb-6">
              <label class="form-label" for="email2">
                Email
              </label>
              <input id="email2" v-model.trim="signupForm.email" class="form-input" type="text" placeholder="you@email.com">
            </div>
            <div class="mb-6">
              <label class="form-label" for="password2">
                Password
              </label>
              <input id="password2" v-model.trim="signupForm.password" class="form-input" type="password" placeholder="min 6 characters">
            </div>
            <button class="button btn btn--primary w-full p-4 tracking-wider" @click="signup">
              Sign Up
            </button>
          </div>
          <div class="card-footer">
            <div class="text-center">
              <a class=" font-bold text-primary hover:text-primary-dark no-underline" @click="toggleForm">
                Back to Log In
              </a>
            </div>
          </div>
        </form>
        <form v-if="showForgotPassword" class=" password-reset" @submit.prevent>
          <div v-if="!passwordResetSuccess">
            <div class="card-header">
              <h1>Reset Password</h1>
              <p>We will send you an email to reset your password</p>
            </div>
            <div class="card-body border-b">
              <div class="mb-6">
                <label class="form-label" for="email3">
                  Email
                </label>
                <input id="email3" v-model.trim="passwordForm.email" class="form-input" type="text" placeholder="you@email.com">
              </div>
              <button class="button btn btn--primary w-full p-4 tracking-wider" @click="resetPassword">
                Submit
              </button>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a class=" font-bold text-primary hover:text-primary-dark no-underline" @click="togglePasswordReset">
                  Back to Log In
                </a>
              </div>
            </div>
          </div>
          <div v-else>
            <h1>Email Sent</h1>
            <p>check your email for a link to reset your password</p>
            <button class="button" @click="togglePasswordReset">
              Back to login
            </button>
          </div>
        </form>
        <transition name="fade">
          <div v-if="errorMsg !== ''" class="error-msg">
            <p>{{ errorMsg }}</p>
          </div>
        </transition>
      </div>
    </div>
    </div>
    </section>
    </div>
    </div>
  </modal>
</template>

  <script>
const fb = require('~/services/firebaseConfig.js')

export default {
  name: 'LoginModal',
  layout: 'login',
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      passwordForm: {
        email: ''
      },
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: ''
    }
  },
  methods: {
    toggleForm() {
      this.errorMsg = ''
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      if (this.showForgotPassword) {
        this.showLoginForm = true
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      } else {
        this.showLoginForm = false
        this.showForgotPassword = true
      }
    },
    googleSignIn() {
      fb.auth
        .signInWithPopup(fb.GoogleProvider)
        .then(({ user }) => {
          this.$store.commit('setCurrentUser', user)

          // create answer obj
          fb.answersCollection.doc(user.uid).set({
            0: user.displayName
          })
          // create user obj
          fb.usersCollection
            .doc(user.uid)
            .set({
              name: user.displayName
            })
            .then(() => {
              this.$store.dispatch('fetchUserProfile')
              this.performingRequest = false
              this.$router.push('/dashboard/account')
            })
            .catch(err => {
              console.log(err)
              this.performingRequest = false
              this.errorMsg = err.message
            })
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    },
    facebookSignIn() {
      fb.auth
        .signInWithPopup(fb.FacebookProvider)
        .then(({ user }) => {
          this.$store.commit('setCurrentUser', user)
          console.log('here we go: ' + user.uid)

          // create answer obj
          fb.answersCollection.doc(user.uid).set({
            0: user.displayName
          })
          // create user obj
          fb.usersCollection
            .doc(user.uid)
            .set({
              name: user.displayName
            })
            .then(() => {
              console.log('Inside Facebook Sign in... After Set ')
              this.$store.dispatch('fetchUserProfile')
              this.performingRequest = false
              this.$router.push('/dashboard/account')
            })
            .catch(err => {
              console.log(err)
              this.performingRequest = false
              this.errorMsg = err.message
            })
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    },
    login() {
      this.performingRequest = true

      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(({ user }) => {
          this.$store.commit('setCurrentUser', user)
          this.$store.dispatch('fetchUserProfile')
          this.performingRequest = false
          this.$router.push('/dashboard/account')
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    },
    signup() {
      this.performingRequest = true

      fb.auth
        .createUserWithEmailAndPassword(
          this.signupForm.email,
          this.signupForm.password
        )
        .then(({ user }) => {
          this.$store.commit('setCurrentUser', user)

          // create answer obj
          fb.answersCollection.doc(user.uid).set({
            0: user.displayName
          })

          // create user obj
          fb.usersCollection
            .doc(user.uid)
            .set({
              name: this.signupForm.name,
              title: this.signupForm.title
            })
            .then(() => {
              this.$store.dispatch('fetchUserProfile')
              this.performingRequest = false
              this.$router.push('/dashboard/account')
            })
            .catch(err => {
              console.log(err)
              this.performingRequest = false
              this.errorMsg = err.message
            })
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    },
    resetPassword() {
      this.performingRequest = true

      fb.auth
        .sendPasswordResetEmail(this.passwordForm.email)
        .then(() => {
          this.performingRequest = false
          this.passwordResetSuccess = true
          this.passwordForm.email = ''
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    }
  }
}
</script>

  <style lang="scss" scoped>
.facebook {
  background-color: #3b5998;
}
.demo-modal-class {
  border-radius: 5px;
}

.v--modal-overlay[data-modal='login-modal'] {
  background: rgba(0, 0, 0, 0.3);
}
</style>
</template>
