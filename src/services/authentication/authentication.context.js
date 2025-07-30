import { createContext, useState } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        isLoading(false);
      });
  };
  return (
    <AuthenticationContext.Provider value={{ user, isLoading, error, onLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
