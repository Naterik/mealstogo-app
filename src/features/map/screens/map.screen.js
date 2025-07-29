import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView, { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const BottomSheetContainer = styled.View`
  background-color: #ffff;
  border-radius: 8px;

  margin: 16px;
`;

export const MapScreen = () => {
  const { restaurants = [] } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["30%", "50%"], []);

  useEffect(() => {
    const north = viewport.northeast.lat;
    const south = viewport.southwest.lat;
    setLatDelta(north - south);
  }, [location, viewport]);

  const handleMarkerPress = useCallback((restaurant) => {
    setSelectedRestaurant(restaurant);
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      setSelectedRestaurant(null);
    }
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(() => null, []);

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

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: "white" }}
        handleIndicatorStyle={{ backgroundColor: "#ccc" }}
      >
        <BottomSheetView>
          <BottomSheetContainer>
            {selectedRestaurant && (
              <CompactRestaurantInfo
                restaurant={selectedRestaurant}
                onClose={closeBottomSheet}
              />
            )}
          </BottomSheetContainer>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};
