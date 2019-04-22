<template>
  <div>
    <!-- Load Stripe.js on your website. -->
    <!-- <script src="https://js.stripe.com/v3" /> -->

    <!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
    <button
      id="checkout-button-sku_Ew1b99d0v8NENG"
      style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
      role="link"
    >
      Checkout
    </button>

    <div id="error-message" />
  </div>
</template>
<script>
export default {
  layout: 'container',
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

    const checkoutButton = document.getElementById(
      'checkout-button-sku_Ew1b99d0v8NENG'
    )
    checkoutButton.addEventListener('click', function() {
      stripe
        .redirectToCheckout({
          items: [
            { sku: 'sku_Ew1b99d0v8NENG', quantity: 1 },
            { sku: 'sku_Ew1bDO1N444doA', quantity: 1 }
          ],

          successUrl: 'https://bewerbli.ch/success',
          cancelUrl: 'https://bewerbli.ch/canceled'
        })
        .then(function(result) {
          if (result.error) {
            const displayError = document.getElementById('error-message')
            displayError.textContent = result.error.message
          }
        })
    })
  }
}
</script>
