const functions = require('firebase-functions')

const stripe = require('stripe')('sk_test_YeAaxhLffQmLFb4T0eAv9iVh00gnAUSM2J')

exports.stripe_charge = functions.https.onCall(async (data, context) => {
  try {
    let charge = await stripe.charges.create({
      amount: data.amount,
      source: data.token,
      currency: 'nzd',
      description: 'STRIPE PAYMENT WTH VUE'
    })

    console.log(charge)
    return charge
  } catch (error) {
    console.log(error)
    return error
  }
})
