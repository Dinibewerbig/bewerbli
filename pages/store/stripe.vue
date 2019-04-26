
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3">
        <div class="card mb-4 shadow-sm my-5 mx-auto">
          <div class="card-header">
            <div class="row">
              <h5>Stripe Elementssdf sdasdfdfasdfsadf  + Vue</h5>
            </div>
          </div>    

          <div>
            class="card-body "
            >
            <form>
              <div class="form-group">
                <label for="amount">
                  Amount
                </label>
                <input
                  v-model="card.amount"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': cardAmountError }"
                >
                <span
                  v-if="cardAmountError"
                  class="invalid-feedback"
                >
                  {{ cardAmountError }}
                </span>
              </div>

              <div class="form-group">
                <label for="Card Number">
                  Card Details
                </label>
                <div
                  id="card"
                  class="form-control"
                  :class="{ 'is-invalid': ccardError }"
                />
                <span
                  v-if="ccardError"
                  class="invalid-feedback"
                >
                  {{ ccardError }}
                </span>
              </div>

              <div
                v-if="stripeError"
                class="alert alert-danger"
              >
                {{ stripeError }}
              </div>
              <div class="form-group">
                <button
                  class="btn btn-success btn-block"
                  @click.prevent="submitFormToCreateToken()"
                >
                  PAY $ {{ card.amount }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nativeToast from 'native-toast'
import { fb } from '~/services/firebaseConfig.js'
export default {
  filters: {
    currency: function(value) {
      if (!value) return ''
      return value.toLocaleString('en-NZ', {
        style: 'currency',
        currency: 'NZD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  },
  data() {
    return {
      card: {
        amount: 10.0,
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
  created() {},
  mounted() {
    this.setUpStripe()
  },
  methods: {
    setUpStripe() {
      if (window.Stripe === undefined) {
      } else {
        const stripe = window.Stripe('pk_test_QFO9FaFcBqG8DFl41wl7tIep')
        this.stripe = stripe

        const elements = stripe.elements()
        this.ccard = elements.create('card', {
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
      this.stripe.createToken(this.ccard).then(result => {
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

<style>
#card {
  padding-top: 10px;
}
</style>
