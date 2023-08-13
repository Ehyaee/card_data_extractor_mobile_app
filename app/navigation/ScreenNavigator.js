import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config";
import SplashScreen from "../screens/SplashScreen";
import Home from "../screens/Home";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: colors.appBackgroundColor },
    }}
  >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Result" component={Result} />
  </Stack.Navigator>
);

export default ScreenNavigator;
