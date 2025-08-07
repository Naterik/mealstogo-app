import { Platform } from "react-native";

const liveGeo = `https://geocode-u6eolxbmoq-uc.a.run.app`;
const livePlace = `https://placesnearby-u6eolxbmoq-uc.a.run.app`;
export const local = "http://192.168.1.205:5001/mymealstogo-d8032/us-central1";
export const PUBLIC_STRIPE_KEY =
  "pk_test_51Rs15qQjTMmECJXgXfi2BTpUb8WEM8e1U9uZqu8wXrnlcVrVfgXtUiXQJi4YcgdB6bGXZmPFtHObDuFUoEskbn9A00oYjSkBcW";
export const PRIVATE_STRIPE_KEY =
  "sk_test_51Rs15qQjTMmECJXgr47V9S4D6YdqZ4I6RmaqAbQOIO3IeqiBPvdRByDwKAlHKNCSRaEsxKMmACyzelftznBHqVfH00ttcByFj5";
const isDevelopment = process.env.NODE_ENV === "development";
const isAndroid = Platform.OS === "android";
export const hostGeo = !isDevelopment || isAndroid ? liveGeo : local;
export const isMock = true;
export const hostPlace = !isDevelopment || isAndroid ? livePlace : local;
