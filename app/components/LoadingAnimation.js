import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import images from "../config/images";
import { sizes } from "../config";
import AppText from "./AppText";

function LoadingAnimation(props) {
  return (
    <View style={styles.container}>
      <LottieView
        resizeMode="cover"
        autoPlay
        loop
        source={images.loadingAnimation}
        style={styles.image}
        speed={4}
      />
      <AppText style={styles.text}>Please wait...</AppText>
    </View>
  );
}

export default LoadingAnimation;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "red",
  },
  image: { width: sizes.width, height: sizes.height },
  text: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
