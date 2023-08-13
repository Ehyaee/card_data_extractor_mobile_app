import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import images from "../config/images";
import { sizes } from "../config";

function SplashAnimation(props) {
  return (
    <View style={styles.container}>
      <LottieView
        resizeMode="contain"
        autoPlay
        loop
        source={images.splashAnimation}
        style={styles.image}
      />
    </View>
  );
}

export default SplashAnimation;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  image: { width: sizes.width * 0.5, height: sizes.width * 0.5 },
});
