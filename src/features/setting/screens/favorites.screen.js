import { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import styled from "styled-components";
import { Text } from "react-native";
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const NoFavoritesArea = styled(StyledSafeAreaView)`
  justify-content: center;
  align-items: center;
`;
export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <StyledSafeAreaView>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="medium">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
      />
    </StyledSafeAreaView>
  ) : (
    <NoFavoritesArea>
      <Text>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
