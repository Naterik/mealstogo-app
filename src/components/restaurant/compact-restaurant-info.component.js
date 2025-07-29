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

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  padding: 20px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 100%;
  max-heigh: 200;
  align-items: flex-end;
`;

export const CompactRestaurantInfo = ({
  restaurant,
  setModalVisible,
  modalVisible,
}) => {
  return (
    <Item>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <CompactImage source={{ uri: restaurant.photos[0] }} />
          <TextCustomize style={{ textAlign: "center" }} variant="body">
            {restaurant.name}
          </TextCustomize>
        </TouchableOpacity>
      </View>
    </Item>
  );
};
const styles = StyleSheet.create({
  modalView: {
    width: 140,
    height: 150,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
