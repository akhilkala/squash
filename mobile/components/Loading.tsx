import React, { ReactElement } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading(): ReactElement {
  return (
    <View>
      <LottieView source={require("./animation.json")} autoPlay loop />;
    </View>
  );
}
