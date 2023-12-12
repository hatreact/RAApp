import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { useSelector } from "react-redux";

import SplashScreen from "../Screens/SplashScreen";
import FastImage from "react-native-fast-image";
import UserChatList from "../Screens/userChatList";
import IncomingCallScreen from "../Screens/CallTab/IncomingCallScreen";
import VideoScreen from "../Screens/CallTab/VideoScreen";
import InitiateCallScreen from "../Screens/CallTab/InitiateCallScreen";

const Stack = createNativeStackNavigator();

const HeaderTitle = () => (
  <View
    style={{
      width: 30,
      height: 30,
      alignSelf: "center",
      alignItems: "center",
    }}
  >
    <FastImage
      resizeMode="contain"
      style={{ width: 40, height: "100%" }}
      source={require("../assets/iconimages/header-icon.png")}
    />
  </View>
);

const StackNavigations = props => {
  const [showScreen, setShowScreen] = useState(false);
  const { isIcoming, isEarlyAccepted } = useSelector(store => store.ActiveCall);

  console.log("ACTIVE CALL", isIcoming, isEarlyAccepted);

  const showCallScreen = () => {
    if (isIcoming && !isEarlyAccepted) {
      setShowScreen(true);
    } else if (isEarlyAccepted) {
      setShowScreen(true);
    } else {
      setShowScreen(false);
    }
  };

  useEffect(() => {
    showCallScreen();
  }, [isIcoming]);

  return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="UserChatList" component={UserChatList} />
      <Stack.Screen name="IncomingCallScreen" component={IncomingCallScreen} />
      <Stack.Screen
        name="InitiateCallScreen"
        component={InitiateCallScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigations;
