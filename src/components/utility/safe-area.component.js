import { View, SafeAreaView, StatusBar, FlatList, Text } from "react-native";
import styled from "styled-components/native";
export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight
    ? `${StatusBar.currentHeight}px`
    : "0px"};
`;
