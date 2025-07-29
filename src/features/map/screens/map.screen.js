import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
const CalloutContainer = styled.View`
  position: absolute;
  bottom: 100px;
  left: 10%;
  right: 10%;
  background-color: #ffff;
  border-radius: 8px;
  padding: 12px;
`;
export const MapScreen = () => {
  const { restaurants = [] } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const north = viewport.northeast.lat;
    const south = viewport.southwest.lat;
    setLatDelta(north - south);
  }, [location, viewport]);

  const handleMarkerPress = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalVisible(true);
  };

  return (
    <>
      <Search />
      <Map
        region={{
          latitudeDelta: latDelta,
          latitude: lat,
          longitude: lng,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            onPress={() => handleMarkerPress(restaurant)}
            coordinate={{
              latitude: restaurant?.geometry?.location?.lat,
              longitude: restaurant?.geometry?.location?.lng,
            }}
          />
        ))}
      </Map>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedRestaurant(null);
        }}
      >
        <View style={{ flex: 1 }} pointerEvents="box-none">
          <CalloutContainer pointerEvents="auto">
            {selectedRestaurant && (
              <CompactRestaurantInfo
                restaurant={selectedRestaurant}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
              />
            )}
          </CalloutContainer>
        </View>
      </Modal>
    </>
  );
};
