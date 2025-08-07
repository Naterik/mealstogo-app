import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantNavigator } from "./restaurant.navigator";
import { MapNavigator } from "./map.navigator";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { SettingsNavigator } from "./settings.navigator";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screens";
import { CartContextProvider } from "../../services/cart/cart.context";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Checkout: "cart",
  Settings: "settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: "false",
  };
};
export const AppNavigator = () => {
  return (
    <LocationContextProvider>
      <RestaurantContextProvider>
        <FavoritesContextProvider>
          <CartContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen
                name="Restaurants"
                component={RestaurantNavigator}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Map"
                component={MapNavigator}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{ headerShown: false }}
              />
            </Tab.Navigator>
          </CartContextProvider>
        </FavoritesContextProvider>
      </RestaurantContextProvider>
    </LocationContextProvider>
  );
};
