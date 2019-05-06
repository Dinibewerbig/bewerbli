
<template>
  <modal
    name="login-modal"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :delay="100"
    :adaptive="true"
    height="auto"
    :width="370"
  >
    <div class="card card--simple">
      <div class :class="{ 'signup-form': !showLoginForm && !showForgotPassword }">
        <form v-if="showLoginForm" @submit.prevent>
          <div class="card-header">
            <h1>In dein Bewerbli-Konto einloggen</h1>
          </div>
          <div class="card-body">
            <div class="mb-6">
              <input
                id="email1"
                v-model.trim="loginForm.email"
                class="form-input"
                type="text"
                placeholder="E-Mail-Adresse"
              >
            </div>
            <div class="mb-6">
              <input
                id="password1"
                v-model.trim="loginForm.password"
                class="form-input"
                type="password"
                placeholder="Passwort"
              >
            </div>
            <button
              class="button btn btn--primary w-full p-4 tracking-wider"
              @click="login"
            >
              Einloggen
            </button>
            <div class="w-full">
              <div class="mt-8 w-full text-center text-primary">
                oder fahren Sie fort mit
              </div>
              <div class="mt-8 mb-8 w-full justify-center flex">
                <div class="ml-4" @click="googleSignIn">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Google</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle cx="26" cy="26" r="25.5" fill="#FFF" stroke="#E6E6E6" />
                      <path
                        d="M34.64 26.205c0-.639-.057-1.252-.164-1.841H26v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                        fill="#4285F4"
                      />
                      <path
                        d="M26 35c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0 0 26 35z"
                        fill="#34A853"
                      />
                      <path
                        d="M20.964 27.71a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0 0 17 26c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M26 20.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C30.463 17.891 28.426 17 26 17a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71z"
                        fill="#EA4335"
                      />
                    </g>
                  </svg>
                </div>

                <div class="ml-4" @click="facebookSignIn">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Facebook</title>
                    <defs>
                      <path id="id-6a" d="M5.5 20H11V0H0v20z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <circle stroke="#E6E6E6" fill="#FFF" cx="26" cy="26" r="25.5" />
                      <g transform="translate(20 17)">
                        <mask id="id-7b" fill="#fff">
                          <use xlink:href="#id-6a" />
                        </mask>
                        <path
                          d="M7.14 20v-9.123h3.243l.486-3.555h-3.73v-2.27c0-1.03.304-1.731 1.867-1.731L11 3.32V.14A28.246 28.246 0 0 0 8.094 0C5.22 0 3.251 1.657 3.251 4.7v2.622H0v3.555h3.251V20H7.14z"
                          fill="#3B5998"
                          mask="url(#id-7b)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                <div class="ml-4">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle stroke="#E6E6E6" fill="#FFF" cx="26" cy="26" r="25.5" />
                      <path
                        d="M34.525 20.653a4.261 4.261 0 0 0 1.895-2.343 8.72 8.72 0 0 1-2.736 1.027A4.338 4.338 0 0 0 30.539 18c-2.38 0-4.308 1.896-4.308 4.235 0 .332.038.655.111.965a12.303 12.303 0 0 1-8.88-4.425 4.16 4.16 0 0 0-.583 2.13c0 1.469.76 2.765 1.916 3.524a4.348 4.348 0 0 1-1.951-.53v.054c0 2.052 1.485 3.763 3.456 4.152a4.384 4.384 0 0 1-1.946.073c.548 1.682 2.14 2.907 4.025 2.941a8.74 8.74 0 0 1-5.351 1.813c-.348 0-.69-.02-1.028-.06a12.349 12.349 0 0 0 6.604 1.903c7.925 0 12.259-6.453 12.259-12.049 0-.184-.005-.366-.013-.548A8.676 8.676 0 0 0 37 19.986a8.731 8.731 0 0 1-2.475.667z"
                        fill="#00ACED"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="text-center flex">
              <a
                class="mr-2 font-bold text-primary hover:text-primary-dark no-underline"
                @click="toggleForm"
              >
                Neues Konto erstellen
              </a>
              <a
                class="ml-2 text-primary hover:text-primary-dark no-underline"
                @click="togglePasswordReset"
              >
                Passwort vergessen
              </a>
            </div>
          </div>
        </form>
        <form v-if="!showLoginForm && !showForgotPassword" @submit.prevent>
          <div class="card-header">
            <h1>Neues Konto erstellen</h1>
          </div>
          <div class="card-body border-b">
            <div class="mb-6">
              <input
                id="name"
                v-model.trim="signupForm.name"
                class="form-input"
                type="text"
                placeholder="Vorname"
              >
            </div>
            <div class="mb-6">
              <input
                id="name"
                v-model.trim="signupForm.name"
                class="form-input"
                type="text"
                placeholder="Nachname"
              >
            </div>

            <div class="mb-6">
              <input
                id="email2"
                v-model.trim="signupForm.email"
                class="form-input"
                type="text"
                placeholder="E-Mail-Adresse"
              >
            </div>
            <div class="mb-6">
              <input
                id="password2"
                v-model.trim="signupForm.password"
                class="form-input"
                type="password"
                placeholder="Password"
              >
            </div>
            <button
              class="button btn btn--primary w-full p-4 tracking-wider"
              @click="signup"
            >
              Sign Up
            </button>
            <div class="w-full">
              <div class="mt-8 w-full text-center text-primary">
                oder fahren Sie fort mit
              </div>
              <div class="mt-8 mb-8 w-full justify-center flex">
                <div class="ml-4" @click="googleSignIn">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Google</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle cx="26" cy="26" r="25.5" fill="#FFF" stroke="#E6E6E6" />
                      <path
                        d="M34.64 26.205c0-.639-.057-1.252-.164-1.841H26v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                        fill="#4285F4"
                      />
                      <path
                        d="M26 35c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0 0 26 35z"
                        fill="#34A853"
                      />
                      <path
                        d="M20.964 27.71a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0 0 17 26c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M26 20.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C30.463 17.891 28.426 17 26 17a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71z"
                        fill="#EA4335"
                      />
                    </g>
                  </svg>
                </div>

                <div class="ml-4" @click="facebookSignIn">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Facebook</title>
                    <defs>
                      <path id="id-6a" d="M5.5 20H11V0H0v20z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <circle stroke="#E6E6E6" fill="#FFF" cx="26" cy="26" r="25.5" />
                      <g transform="translate(20 17)">
                        <mask id="id-7b" fill="#fff">
                          <use xlink:href="#id-6a" />
                        </mask>
                        <path
                          d="M7.14 20v-9.123h3.243l.486-3.555h-3.73v-2.27c0-1.03.304-1.731 1.867-1.731L11 3.32V.14A28.246 28.246 0 0 0 8.094 0C5.22 0 3.251 1.657 3.251 4.7v2.622H0v3.555h3.251V20H7.14z"
                          fill="#3B5998"
                          mask="url(#id-7b)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                <div class="ml-4">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <g fill="none" fill-rule="evenodd">
                      <circle stroke="#E6E6E6" fill="#FFF" cx="26" cy="26" r="25.5" />
                      <path
                        d="M34.525 20.653a4.261 4.261 0 0 0 1.895-2.343 8.72 8.72 0 0 1-2.736 1.027A4.338 4.338 0 0 0 30.539 18c-2.38 0-4.308 1.896-4.308 4.235 0 .332.038.655.111.965a12.303 12.303 0 0 1-8.88-4.425 4.16 4.16 0 0 0-.583 2.13c0 1.469.76 2.765 1.916 3.524a4.348 4.348 0 0 1-1.951-.53v.054c0 2.052 1.485 3.763 3.456 4.152a4.384 4.384 0 0 1-1.946.073c.548 1.682 2.14 2.907 4.025 2.941a8.74 8.74 0 0 1-5.351 1.813c-.348 0-.69-.02-1.028-.06a12.349 12.349 0 0 0 6.604 1.903c7.925 0 12.259-6.453 12.259-12.049 0-.184-.005-.366-.013-.548A8.676 8.676 0 0 0 37 19.986a8.731 8.731 0 0 1-2.475.667z"
                        fill="#00ACED"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a
                  class="font-bold text-primary hover:text-primary-dark no-underline"
                  @click="toggleForm"
                >
                  Back to Log In
                </a>
              </div>
            </div>
          </div>
        </form>
        <form v-if="showForgotPassword" class="password-reset" @submit.prevent>
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
                <input
                  id="email3"
                  v-model.trim="passwordForm.email"
                  class="form-input"
                  type="text"
                  placeholder="you@email.com"
                >
              </div>
              <button
                class="button btn btn--primary w-full p-4 tracking-wider"
                @click="resetPassword"
              >
                Submit
              </button>
            </div>
            <div class="card-footer">
              <div class="text-center">
                <a
                  class="font-bold text-primary hover:text-primary-dark no-underline"
                  @click="togglePasswordReset"
                >
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
              name: this.signupForm.name
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
.demo-modal-class {
  border-radius: 5px;
}

.v--modal-overlay[data-modal='login-modal'] {
  background: rgba(0, 0, 0, 0.4);
}
</style>
