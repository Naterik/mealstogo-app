const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay/index");
const { onRequest } = require("firebase-functions/v2/https");
const PRIVATE_STRIPE_KEY = require(".././src/utils/env");
const stripe = require("stripe")(PRIVATE_STRIPE_KEY);
exports.geoCode = onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearBy = onRequest((request, response) => {
  placesRequest(request, response);
});

exports.pay = onRequest((request, response) => {
  payRequest(request, response, stripe);
});

// exports.cityCode = functions.https.onRequest((request, response) => {
//   geocodeRequest(request, response, client);
// });

// exports.placesNearBy = functions.https.onRequest((request, response) => {
//   placesRequest(request, response, client);
// });
// const { Client } = require("@googlemaps/google-maps-services-js");
// const client = new Client({});
