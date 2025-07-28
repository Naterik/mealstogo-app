import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (search) => {
  return new Promise((resolve, reject) => {
    const locationSearch = locations[search];
    if (!locationSearch) {
      reject("not found");
    }
    resolve(locationSearch);
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
