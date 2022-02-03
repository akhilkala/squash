import React, { ReactElement } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export default function Landing(): ReactElement {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
