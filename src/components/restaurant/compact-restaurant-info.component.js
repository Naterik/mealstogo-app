import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextCustomize } from "../typography/typography.component";
import { Spacer } from "../spacer/spacer.component";
import { useNavigation } from "@react-navigation/native";

const CompactImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  border-radius: 10px;
  width: 270px;
  height: 120px;
  padding: 20px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 100%;
  max-heigh: 100%;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    <Item>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            restaurant,
          })
        }
      >
        <CompactImage source={{ uri: restaurant.photos[0] }} />
        <Spacer position="top" size="small" />
        <TextCustomize style={{ textAlign: "center" }} variant="label">
          {restaurant.name}
        </TextCustomize>
      </TouchableOpacity>
    </Item>
  );
};
