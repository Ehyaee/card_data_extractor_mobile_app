import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default {
  appBtnHeight: height < 720 ? 10 : 16,
  primaryFontSize: height < 720 ? 12 : 14,
  buttonFontSize: height < 720 ? 16 : 20,
  width: width,
  height: height,
};
