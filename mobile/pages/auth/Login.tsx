import React, { ReactElement } from "react";
import useInputState from "../../hooks/useInputState";
import { Button, View } from "react-native";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";

export default function Login(): ReactElement {
  const email = useInputState();
  const password = useInputState();
  const auth = useAuth();

  return (
    <View>
      <Input state={email} name="Email" />
      <Input password state={password} name="Password" />
      <Button
        title="Submit"
        onPress={() => auth.login(email.value, password.value)}
      />
    </View>
  );
}
