import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { TextCustomize } from "../../../components/typography/typography.component";
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const BottomSheetContainer = styled.View`
  background-color: #ffff;
  border-radius: 8px;
  margin: 5px;
`;

const RestaurantMap = ({ navigation }) => {
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

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <StyledSafeAreaView>
        <TextCustomize variant="error">Not retrieving data</TextCustomize>
      </StyledSafeAreaView>
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
