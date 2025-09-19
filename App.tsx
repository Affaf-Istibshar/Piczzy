import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Routes/AppNavBar";
import * as SystemUI from "expo-system-ui";
import RNBootSplash from "react-native-bootsplash";

export default function App() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#FFFFFF");

    const init = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      RNBootSplash.hide({ fade: true });
    };

    init();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
