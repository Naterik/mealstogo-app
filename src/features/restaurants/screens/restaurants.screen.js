import { View, SafeAreaView, StatusBar, FlatList, Text } from "react-native";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";

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

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  return (
    <StyledSafeAreaView>
      <Search />
      <RestaurantCard>
        <RestaurantList
          data={restaurants}
          //item:item
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="medium">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          // keyExtractor={(item) => item.name}
        />
      </RestaurantCard>
      {isLoading && (
        <Loading>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.blueA200}
            size="large"
          />
        </Loading>
      )}
    </StyledSafeAreaView>
  );
};
