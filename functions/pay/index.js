const stripe = require("stripe")(
  "sk_test_51Rs15qQjTMmECJXgr47V9S4D6YdqZ4I6RmaqAbQOIO3IeqiBPvdRByDwKAlHKNCSRaEsxKMmACyzelftznBHqVfH00ttcByFj5"
);
module.exports.payRequest = async (request, response, string) => {
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2025-07-30.basil" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  response.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.PUBLIC_STRIPE_KEY,
  });
};
