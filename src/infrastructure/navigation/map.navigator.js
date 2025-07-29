import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurant-detail.component";

const navigationScreenOption = () => {
  return {
    headerShown: false,
    gestureEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
    ...TransitionPresets.RevealFromBottomAndroid,
  };
};
export const MapNavigator = () => {
  const MapStack = createStackNavigator();
  return (
    <MapStack.Navigator screenOptions={navigationScreenOption}>
      <MapStack.Screen
        name="MapMain"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <MapStack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </MapStack.Navigator>
  );
};
