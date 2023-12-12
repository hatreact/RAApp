import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableFreeze, enableScreens } from "react-native-screens";

import StackNavigations from "./src/Navigations/StackNavigation";
import configureStore from "./src/store";
import ConnectyCube from "react-native-connectycube";
import CallService from "./src/services/call-service";
import pushNotificationService from "./src/services/PushNotificationService";
import config from "./connectycube_config.json";
ConnectyCube.init(...config.connectyCubeConfig);

enableFreeze();
enableScreens();

LogBox.ignoreAllLogs();

const { store } = configureStore();
CallService.getStore(store);
pushNotificationService.getStore(store);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigations />
    </NavigationContainer>
  );
};

export default App;
