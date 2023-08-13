import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { colors, sizes } from "../config";

function Result({ route, navigation }) {
  const copyToClipboard = async (text) => {
    try {
      await Clipboard.setStringAsync(String(text));
    } catch (error) {}
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: route.params.uri }}
            style={styles.image}
            resizeMethod="resize"
          />
        </View>
        <AppText style={styles.title}>Extracted Data:</AppText>
        <View style={styles.row}>
          <AppText style={styles.text}>card number:</AppText>
          <AppText style={styles.text}>{route.params.card_number}</AppText>
          <TouchableOpacity
            style={styles.center}
            onPress={() => copyToClipboard(route.params.card_number)}
          >
            <Ionicons name="copy-outline" size={24} color={colors.textColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <AppText style={styles.text}>cvv2:</AppText>
          <AppText style={styles.text}>{route.params.cvv2}</AppText>
          <TouchableOpacity
            style={styles.center}
            onPress={() => copyToClipboard(route.params.cvv2)}
          >
            <Ionicons name="copy-outline" size={24} color={colors.textColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <AppText style={styles.text}>expiry date:</AppText>
          <AppText style={styles.text}>{route.params.expiry_date}</AppText>
          <TouchableOpacity
            style={styles.center}
            onPress={() => copyToClipboard(route.params.expiry_date)}
          >
            <Ionicons name="copy-outline" size={24} color={colors.textColor} />
          </TouchableOpacity>
        </View>
      </View>
      <AppButton
        title={"Back To Home"}
        style={styles.btn}
        onPress={() => navigation.navigate("Home", { reset: Math.random() })}
      />
    </Screen>
  );
}

export default Result;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 20,
    backgroundColor: colors.resultBacground,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: colors.textColor,
    borderStyle: "dashed",
    width: sizes.width * 0.9,
    height: sizes.width * 0.6,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: sizes.width * 0.9 - 20,
    height: sizes.width * 0.6 - 20,
    borderRadius: 20,
  },
  btn: {
    marginBottom: 30,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    width: sizes.width,
    width: sizes.width * 0.9,
    justifyContent: "space-between",
    marginVertical: 10,
    // backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderColor: colors.textColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: sizes.primaryFontSize + 5,
    textAlign: "left",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "left",
    flexWrap: "wrap",
  },
  center: { justifyContent: "center", alignItems: "center" },
});
