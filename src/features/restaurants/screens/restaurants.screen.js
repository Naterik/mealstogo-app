import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const Search = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantCard = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight
    ? `${StatusBar.currentHeight}px`
    : "0px"};
`;

export const RestaurantsScreen = () => {
  return (
    <StyledSafeAreaView>
      <Search>
        <Searchbar placeholder="Search" />
      </Search>
      <RestaurantCard>
        <RestaurantInfoCard />
      </RestaurantCard>
    </StyledSafeAreaView>
  );
};
