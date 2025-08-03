const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const functions = require("firebase-functions");
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.placeNearBy = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});
