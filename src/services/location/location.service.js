import camelize from "camelize";
import { local, isMock } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${local}/geoCode?city=${searchTerm}&mock=${isMock}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log("locationError", err.message));
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
