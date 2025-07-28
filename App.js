import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Map from "./src/features/restaurants/screens/map";
import Settings from "./src/features/restaurants/screens/settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
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

const App = () => {
  let [oswaldLoaded] = useOswald({ Oswald_400Regular });
  let [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Map"
                component={Map}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
};
export default App;
