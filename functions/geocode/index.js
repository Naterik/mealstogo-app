// const { Client } = require("@googlemaps/google-maps-services-js");
// const client = new Client({});
// const functions = require("firebase-functions/v1");
const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");
module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    response.json(locationMock);
  }
  // client
  //   .geocode({
  //     params: { address: city, key: functions.config().google.key },
  //     timeout: 1000,
  //   })
  //   .then((res) => {
  //     return response.json(res.data);
  //   })
  //   .catch((error) => {
  //     response.status(404);
  //     return response.send(error.response.data.error_message);
  //   });
};
