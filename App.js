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
  apiKey: "AIzaSyBho9AanLDmjfTdbcWLK7qt_bNu8JZM4Cs",
  authDomain: "mymealstogo-d8032.firebaseapp.com",
  projectId: "mymealstogo-d8032",
  storageBucket: "mymealstogo-d8032.firebasestorage.app",
  messagingSenderId: "22717382567",
  appId: "1:22717382567:web:55e8c65de4565fca568082",
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
