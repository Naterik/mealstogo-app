import { local } from "../../utils/env";

export const payRequest = (token, amount, name) => {
  return fetch(`${local}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong with payment");
    }
    return res.json();
  });
};
