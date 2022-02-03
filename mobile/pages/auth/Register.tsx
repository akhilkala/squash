import React, { ReactElement } from "react";
import { Button, View } from "react-native";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import useInputState from "../../hooks/useInputState";

export default function Register(): ReactElement {
  const name = useInputState();
  const email = useInputState();
  const password = useInputState();
  const auth = useAuth();

  return (
    <View>
      <Input state={name} name="Name" />
      <Input state={email} name="Email" />
      <Input state={password} name="Password" password />
      <Button
        title="Submit"
        onPress={() => auth.register(name.value, email.value, password.value)}
      />
    </View>
  );
}
