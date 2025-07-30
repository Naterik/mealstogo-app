import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
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
