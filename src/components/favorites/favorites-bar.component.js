import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavoriteWrapper = styled.View`
  padding: 10px;
`;
const Container = styled.View`
  align-items: center;
`;
const FavoritesBar = ({ favorites }) => {
  return (
    <FavoriteWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <>
              <Container key={restaurant.placeId}>
                <CompactRestaurantInfo restaurant={restaurant} />
              </Container>
            </>
          );
        })}
      </ScrollView>
    </FavoriteWrapper>
  );
};

export default FavoritesBar;
