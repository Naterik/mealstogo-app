const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51Rs15qQjTMmECJXgXfi2BTpUb8WEM8e1U9uZqu8wXrnlcVrVfgXtUiXQJi4YcgdB6bGXZmPFtHObDuFUoEskbn9A00oYjSkBcW";
module.exports.keyRequest = (request, response) => {
  response.json({ publishableKey: STRIPE_PUBLISHABLE_KEY });
};
