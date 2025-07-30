import { FlatList } from "react-native";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
import FavoritesBar from "../../../components/favorites/favorites-bar.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const RestaurantCard = styled.View`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[5]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8 },
})``;

const Loading = styled.Text`
  position: fixed;
  inset: 0px;
  width: 16rem;
  height: 6rem;
  margin: auto;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <StyledSafeAreaView>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavoritesBar favorites={favorites} />}
      <RestaurantCard>
        <RestaurantList
          data={restaurants}
          //item:item
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
          // keyExtractor={(item) => item.name}
        />
      </RestaurantCard>
      {isLoading && (
        <Loading>
          <ActivityIndicator
            animating={isLoading}
            color={MD2Colors.blueA200}
            size="large"
          />
        </Loading>
      )}
    </StyledSafeAreaView>
  );
};
