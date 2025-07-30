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
import * as firebase from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
const firebaseConfig = {
  apiKey: "AIzaSyBL-U9udZgxwhc7uljUf_IOxW0dNCdzurQ",
  authDomain: "mealstogo-5e117.firebaseapp.com",
  projectId: "mealstogo-5e117",
  storageBucket: "mealstogo-5e117.firebasestorage.app",
  messagingSenderId: "778541713992",
  appId: "1:778541713992:web:7da1b6b3e10b49d0eea67d",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthenticationContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <FavoritesContextProvider>
                <Navigation />
              </FavoritesContextProvider>
            </RestaurantContextProvider>
          </LocationContextProvider>
        </AuthenticationContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
export default App;
