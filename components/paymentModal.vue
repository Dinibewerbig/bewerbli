<template>
  <modal
    name="payment-modal"
    transition="nice-modal-fade"
    :delay="100"
    :adaptive="true"
    height="auto"
    classes="demo-modal-class"
    @opened="afterOpened"
  >
    <div class="mx-auto max-w-sm w-full">
      <div class="py-10 text-center" />
      <div class="card card--simple">
        <div class="border-none card-header text-center ">
          <h3>
            Beende deinen Einkauf
          </h3>
        </div>
    
        <form id="payment-form" method="post" class="card-body border-b">
          <div class="form-row">
            <div class="mb-6">
              <label class="form-label mb-4" for="card-element">
                Deine E-mail
              </label>
              <input id="email1" class="form-input" type="text" placeholder="you@email.com">
            </div>
            <div class="mb-6">
              <label class="form-label mb-4" for="card-element">
                Kreditkarte oder Debitkarte
              </label>
              <div
                id="card"
                class="form-control"
                :class="{ 'is-invalid': ccardError }"
              />
              <!-- <span
                v-if="ccardError"
                class="invalid-feedback"
              >
                {{ ccardError }}
              </span> -->
            </div>
           
            <button class="button btn btn--primary w-full p-4 tracking-wider btn-success btn-block" @click.prevent="submitFormToCreateToken()">
              BEZAHLE  CHF {{ amount }} .00
            </button>
          </div>
        </form>
        <div class="card-footer">
          <div class="text-center h-8">
            <div
              v-show="stripeError"
              class="alert alert-danger "
            >
              {{ stripeError }}
            </div>
          </div>
          
          <!-- <div id="card-errors" role="alert" /> -->
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapState } from 'vuex'
import nativeToast from 'native-toast'
import { fb } from '~/services/firebaseConfig.js'
export default {
  layout: 'login',
  filters: {
    currency: function(value) {
      if (!value) return ''
      return value.toLocaleString('en-NZ', {
        style: 'currency',
        currency: 'CHF',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  },
  props: { amount: { type: Number, required: true } },
  data() {
    return {
      options: {
        name: 'superman'
      },
      card: {
        amount: this.amount,
        cc: ''
      },
      transaction: {},
      // elements
      ccard: '',
      stripe: null,

      // errors
      stripeError: '',
      ccardError: '',
      cardAmountError: '',
      loading: false,
      success: false
    }
  },
  computed: {
    ...mapState([
      'userProfile',
      'currentUser',
      'posts',
      'answers',
      'hiddenPosts'
    ])
  },

  methods: {
    afterOpened(event) {
      this.setUpStripe()
      console.log(this.amount)
    },
    setUpStripe() {
      if (window.Stripe === undefined) {
      } else {
        const stripe = window.Stripe('pk_test_QFO9FaFcBqG8DFl41wl7tIep')
        this.stripe = stripe
        const style = {
          base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
              color: '#aab7c4'
            }
          },
          invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
          }
        }
        const elements = stripe.elements()
        this.ccard = elements.create('card', {
          style: style,
          hidePostalCode: true
        })
        this.ccard.mount('#card')
        this.listenForErrors()
      }
    },

    listenForErrors() {
      const vm = this

      this.ccard.addEventListener('change', event => {
        vm.toggleError(event)
        vm.ccardError = ''
        vm.card.cc = !!event.complete
      })
    },

    toggleError(event) {
      if (event.error) {
        this.stripeError = event.error.message
      } else {
        this.stripeError = ''
      }
    },

    submitFormToCreateToken() {
      this.clearCardErrors()
      let valid = true

      if (this.card.amount < 10) {
        valid = false
        this.cardAmountError = 'Amount must be at least $10.00'
      }

      if (!this.card.cc) {
        valid = false
        this.ccardError = 'Card Details are Required'
      }

      if (this.stripeError) {
        valid = false
      }
      if (valid) {
        this.createToken()
      }
    },

    createToken() {
      this.stripe.createToken(this.ccard, this.options).then(result => {
        if (result.error) {
          this.stripeError = result.error.message
        } else {
          const token = result.token.id
          this.createCharge(token)
        }
      })
    },

    createCharge(token) {
      const chargeData = {
        amount: this.card.amount * 100,
        // email: 'mrmartididac@gmail.com',
        token: token
      }
      const stripeCharge = fb.httpsCallable('stripe_charge')
      stripeCharge(chargeData).then(result => {
        console.log('stripe_charge')
        console.log(JSON.stringify(result))
        if (result.data.status === 'succeeded') {
          // this.receipt()
          nativeToast({
            message: 'Thank you for your payment',
            position: 'north',
            // Self destroy in 5 seconds
            timeout: 5000,
            type: 'success'
          })
        }
      })
    },

    clearElementsInputs() {
      this.ccard.clear()
    },

    clearCardErrors() {
      this.ccardError = ''
      this.cardAmountError = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
