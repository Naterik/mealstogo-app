import React from "react";
import { mocks, mockImages } from "../restaurants/mock/index";
import camelize from "camelize";
export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
export const restaurantTransform = ({ results = [] }) => {
  const newData = results.map((data) => {
    data.photos = data.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...data,
      isOpenNow: data?.opening_hours?.open_now,
      isClosedTemporarily: data?.business_status === "CLOSED_TEMPORARILY",
      address: data?.vicinity,
    };
  });

  return camelize(newData);
};
