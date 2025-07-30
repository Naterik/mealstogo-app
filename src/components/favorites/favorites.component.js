import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styled from "styled-components";
import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteIcon = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  z-index: 9;
`;
export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const isFavorites = favorites.find((f) => f.placeId === restaurant.placeId);
  return (
    <FavoriteIcon
      onPress={() => {
        !isFavorites
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant);
      }}
    >
      <AntDesign
        name={isFavorites ? "heart" : "hearto"}
        size={24}
        color={isFavorites ? "red" : "white"}
      />
    </FavoriteIcon>
  );
};
