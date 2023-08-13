import React from "react";
import { StyleSheet, Text } from "react-native";

import { sizes, colors } from "../config";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.primaryFontSize,
    fontFamily: Platform.OS == "ios" ? "Verdana" : "Roboto",
    textAlign: "right",
    backgroundColor: "transparent",
    color: colors.textColor,
  },
});
