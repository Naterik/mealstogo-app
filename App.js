import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <FavoritesContextProvider>
              <Navigation />
            </FavoritesContextProvider>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
export default App;
