import { useEffect, useRef } from "react";
import { Text, StyleSheet, View, Platform, Animated } from "react-native";

import SplashAnimation from "../components/SplashAnimation";
import Screen from "../components/Screen";
import { sizes } from "../config";

function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    splashTimeout();
  }, []);

  function splashTimeout() {
    setTimeout(() => {
      fadeOut();
    }, 1900);
    setTimeout(() => {
      next();
    }, 2000);
  }

  const next = () => {
    navigation.navigate("Home");
  };

  return (
    <Screen style={styles.screen}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <SplashAnimation />
        <Text style={styles.company}>{"Card Data Extractor"}</Text>
        <Text style={styles.copyrigth}>
          Copyright {"\u00A9"} Pineapple Team. 2023
        </Text>
      </Animated.View>
    </Screen>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    paddingTop: sizes.height * 0.2,
  },
  company: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 20,
    fontFamily: Platform.OS == "ios" ? "Verdana" : "Roboto",
  },
  copyrigth: {
    color: "white",
    fontSize: 12,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
});
