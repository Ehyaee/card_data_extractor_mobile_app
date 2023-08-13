import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { EvilIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import Screen from "../components/Screen";
import { colors, sizes } from "../config";
import LoadingAnimation from "../components/LoadingAnimation";
import api from "../api/api";
import AppErrorMessage from "../components/AppErrorMessage";

function Home({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageType, setSelectedImageType] = useState();
  const [selectedImageName, setSelectedImageName] = useState();

  useEffect(() => {
    if (route.params) {
      setSelectedImage();
      setSelectedImageType();
      setSelectedImageName();
    }
  }, [route.params]);

  const selectImage = async () => {
    try {
      setError(false);

      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        setError(true);
        setErrorMessage("Permission to access media library was denied");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync();

      setSelectedImage(pickerResult.assets[0].uri);
      setSelectedImageType(
        `image/${pickerResult.assets[0].fileName.split(".")[1]}`
      );
      setSelectedImageName(pickerResult.assets[0].fileName);
    } catch (error) {
      setError(true);
      setErrorMessage("Internal Error");
    }
  };

  const handleSubmit = () => {
    api.sendImage(
      selectedImage,
      selectedImageType,
      selectedImageName,
      setLoading,
      setData,
      setError,
      setErrorMessage
    );
  };

  useEffect(() => {
    if (data) {
      navigation.navigate("Result", {
        uri: selectedImage,
        cvv2: data.cvv2,
        card_number: data.card_number,
        expiry_date: data.exp_date,
      });
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Screen style={styles.container}>
          <View style={styles.flex}>
            <TouchableOpacity style={styles.button} onPress={selectImage}>
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.image}
                  resizeMethod="resize"
                />
              ) : (
                <EvilIcons
                  name="image"
                  size={sizes.width * 0.3}
                  color={colors.textColor}
                />
              )}
            </TouchableOpacity>
            <AppErrorMessage visible={error} errorMessage={errorMessage} />
            <AppText style={styles.title}>Pick a picture of your card</AppText>
            <AppText style={styles.description}>
              The image should contain the entire card and be taken from the top
            </AppText>
          </View>

          <AppButton
            title={"Extract Data"}
            style={styles.btn}
            onPress={handleSubmit}
            disabled={
              !selectedImage || !selectedImageType || !selectedImageName
            }
          />
        </Screen>
      )}
    </>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  button: {
    borderWidth: 2,
    borderColor: colors.textColor,
    borderStyle: "dashed",
    width: sizes.width * 0.9,
    height: sizes.width * 0.6,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: sizes.primaryFontSize + 6,
    marginTop: 50,
  },
  description: {
    textAlign: "center",
    marginTop: 30,
    paddingHorizontal: 40,
  },
  btn: {
    alignSelf: "flex-start",
  },
  flex: {
    flex: 1,
  },
  image: {
    width: sizes.width * 0.9 - 20,
    height: sizes.width * 0.6 - 20,
    borderRadius: 20,
  },
});
