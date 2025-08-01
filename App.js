import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
const firebaseConfig = {
  apiKey: "AIzaSyBL-U9udZgxwhc7uljUf_IOxW0dNCdzurQ",
  authDomain: "mealstogo-5e117.firebaseapp.com",
  projectId: "mealstogo-5e117",
  storageBucket: "mealstogo-5e117.firebasestorage.app",
  messagingSenderId: "778541713992",
  appId: "1:778541713992:web:7da1b6b3e10b49d0eea67d",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
export default App;
