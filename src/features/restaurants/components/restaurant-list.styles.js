import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8 },
})``;
export const OrderButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[1]};
  margin: 0 ${(props) => props.theme.space[6]};
`;
