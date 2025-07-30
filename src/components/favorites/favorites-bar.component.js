import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { TextCustomize } from "../typography/typography.component";
import { Spacer } from "../spacer/spacer.component";

const FavoriteWrapper = styled.View`
  padding: 10px;
`;
const Container = styled.View`
  align-items: center;
`;
const FavoritesBar = ({ favorites }) => {
  return (
    <FavoriteWrapper>
      <Spacer position="left" size="small">
        <TextCustomize variant="body">Favorites</TextCustomize>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <Container key={restaurant.placeId}>
              <CompactRestaurantInfo restaurant={restaurant} />
            </Container>
          );
        })}
      </ScrollView>
    </FavoriteWrapper>
  );
};

export default FavoritesBar;
