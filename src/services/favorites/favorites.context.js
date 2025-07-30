import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    loadFavorites();
  }, []);
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);
  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log("errorLoading", e);
    }
  };
  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("errorGetting", e);
    }
  };

  const addFavorites = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorites = (restaurant) => {
    const newFavorites = favorites.filter(
      (item) => item?.placeId !== restaurant?.placeId
    );
    setFavorites(newFavorites);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        addToFavorites: addFavorites,
        removeFromFavorites: removeFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
