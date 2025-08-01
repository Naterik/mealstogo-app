import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    loadFavorites(user.uid);
  }, [user.uid]);
  useEffect(() => {
    saveFavorites(favorites, user.uid);
  }, [favorites, user.uid]);
  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("errorLoading", e);
    }
  };
  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
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
