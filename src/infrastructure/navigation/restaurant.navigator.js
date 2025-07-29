import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurant-detail.component";

const RestaurantStack = createStackNavigator();
const navigationScreenOption = () => {
  return {
    headerShown: false,
    gestureEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
    ...TransitionPresets.RevealFromBottomAndroid,
  };
};
export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={navigationScreenOption}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
