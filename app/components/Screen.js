import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

export default Screen;
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    flex: 1,
  },
});
