import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/setting/screens/settings.screen";
import { FavoritesScreen } from "../../features/setting/screens/favorites.screen";
import { CameraScreen } from "../../features/setting/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="SettingsMain"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
