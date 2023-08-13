import React from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import AppText from "./AppText";
import { sizes, colors } from "../config";

function AppButton({ title, onPress, loading = false, disabled = false }) {
  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.buttonTextColor} size="large" />
        </View>
      ) : disabled ? (
        <View style={[styles.loading, styles.disabled]}>
          <AppText style={styles.textDisabled}>{title}</AppText>
        </View>
      ) : (
        <TouchableOpacity styles={styles.button} onPress={onPress}>
          <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
      )}
    </>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    flex: 1,
    elevation: 3,
  },
  text: {
    textAlign: "center",
    borderRadius: Platform.OS == "ios" ? 30 : 50,
    overflow: "hidden",
    padding: sizes.appBtnHeight,
    fontSize: sizes.buttonFontSize,
    // fontFamily: "IranSansNumBold",
    width: sizes.width * 0.9,
    marginVertical: 10,
    backgroundColor: colors.secondry,
    flexDirection: "row",
    fontWeight: "bold",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS == "ios" ? 30 : 50,
    overflow: "hidden",
    padding: sizes.appBtnHeight - 2,
    width: "100%",
    marginVertical: 10,
  },
  disabled: {
    padding: sizes.appBtnHeight - 5,
    backgroundColor: colors.grey,
    borderColor: colors.grey,
  },
  textDisabled: {
    color: colors.buttonTextColor,
    paddingVertical: 5,
    fontSize: sizes.buttonFontSize,
    // fontFamily: "IranSansNumBold",
  },
});
