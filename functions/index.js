const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay/index");
const { onRequest } = require("firebase-functions/v2/https");
const { keyRequest } = require("./pay/key");

exports.geoCode = onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearBy = onRequest((request, response) => {
  placesRequest(request, response);
});

exports.pay = onRequest((request, response, string) => {
  payRequest(request, response, string);
});

exports.key = onRequest((request, response) => {
  keyRequest(request, response);
});
// exports.cityCode = functions.https.onRequest((request, response) => {
//   geocodeRequest(request, response, client);
// });

// exports.placesNearBy = functions.https.onRequest((request, response) => {
//   placesRequest(request, response, client);
// });
// const { Client } = require("@googlemaps/google-maps-services-js");
// const client = new Client({});
