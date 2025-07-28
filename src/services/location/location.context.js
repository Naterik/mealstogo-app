import React, { useMemo, useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const onSearch = (searchKeyword) => {
    setIsLoading(true);

    if (!searchKeyword) {
      return;
    }
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    onSearch();
  }, []);
  return (
    <LocationContext.Provider
      value={{ isLoading, location, error, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
