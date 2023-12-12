import React, { useEffect } from "react";
import { Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/native";
import { version } from "../../../package.json";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import colors from "../../utility/colors";

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(async () => {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "UserChatList" }],
        })
      );
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../assets/iconimages/logo.png")}
      />
      <Text style={{ color: colors.primaryBlue }}>Version {version}</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
