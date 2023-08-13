import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { sizes, colors } from "../config";
import AppText from "./AppText";

function AppErrorMessage({ visible, errorMessage, style, ...otherProps }) {
  if (!visible) return null;
  return (
    <View>
      <AppText style={styles.text}>{errorMessage}</AppText>
    </View>
  );
}

export default AppErrorMessage;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 20,
    backgroundColor: colors.errorBackgroundColor,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    textShadowColor: "#000",
    textShadowRadius: 20,
    fontWeight: "bold",
  },
});
