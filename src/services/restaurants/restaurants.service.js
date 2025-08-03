import camelize from "camelize";
import { local, isMock } from "../../utils/env";

export const restaurantRequest = (location) => {
  return fetch(`${local}/placeNearBy?location=${location}&mock=${isMock}`)
    .then((place) => {
      return place.json();
    })
    .catch((e) => console.log("restaurantError", e));
};
export const restaurantTransform = ({ results = [] }) => {
  const newData = results.map((data) => {
    return {
      ...data,
      isOpenNow: data?.opening_hours?.open_now,
      isClosedTemporarily: data?.business_status === "CLOSED_TEMPORARILY",
      address: data?.vicinity,
    };
  });

  return camelize(newData);
};
