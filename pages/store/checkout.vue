<template>
  <div>
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
              <div id="card-element" />
            </div>
            <button class="button btn btn--primary w-full p-4 tracking-wider">
              Zahle 
            </button>
          </div>
        </form>
        <div class="card-footer">
          <div class="text-center">
            <p>Nach der Bezahlung erhalten Sie die Quittung</p>
          </div>
          <div id="card-errors" role="alert" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',
  //   head: {
  //     script: [{ src: 'https://js.stripe.com/v3/' }]
  //   },
  data() {
    return {}
  },
  mounted: function() {
    // if (process.browser) {
    //   const domElement = document.createElement('script')
    //   domElement.setAttribute('src', 'https://js.stripe.com/v3/')
    //   domElement.onload = () => {
    //     this.loadedStripe = true
    //   }
    //   document.body.appendChild(domElement)
    //   console.log(domElement)
    // }
    // eslint-disable-next-line
    const stripe = Stripe('pk_test_QFO9FaFcBqG8DFl41wl7tIep')
    // eslint-disable-next-line
    const elements = stripe.elements()

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

    // Create an instance of the card Element.
    const card = elements.create('card', { style: style })

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount('#card-element')

    // Handle real-time validation errors from the card Element.
    card.addEventListener('change', function(event) {
      const displayError = document.getElementById('card-errors')
      if (event.error) {
        displayError.textContent = event.error.message
      } else {
        displayError.textContent = ''
      }
    })

    // Handle form submission.
    const form = document.getElementById('payment-form')
    form.addEventListener('submit', function(event) {
      event.preventDefault()

      stripe.createToken(card).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error.
          const errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token)
        }
      })
    })

    // Submit the form with the token ID.
    function stripeTokenHandler(token) {
      // Insert the token ID into the form so it gets submitted to the server
      const form = document.getElementById('payment-form')
      const hiddenInput = document.createElement('input')
      hiddenInput.setAttribute('type', 'hidden')
      hiddenInput.setAttribute('name', 'stripeToken')
      hiddenInput.setAttribute('value', token.id)
      form.appendChild(hiddenInput)

      // Submit the form
      form.submit()
    }
    // const checkoutButton = document.getElementById(
    //   'checkout-button-sku_Ew1b99d0v8NENG'
    // )
    // checkoutButton.addEventListener('click', function() {
    //   stripe
    //     .redirectToCheckout({
    //       items: [
    //         { sku: 'sku_Ew1b99d0v8NENG', quantity: 1 },
    //         { sku: 'sku_Ew1bDO1N444doA', quantity: 1 }
    //       ],

    //       successUrl: 'https://bewerbli.ch/success',
    //       cancelUrl: 'https://bewerbli.ch/canceled'
    //     })
    //     .then(function(result) {
    //       if (result.error) {
    //         const displayError = document.getElementById('error-message')
    //         displayError.textContent = result.error.message
    //       }
    //     })
    // })
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
