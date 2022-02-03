import React, { ReactElement } from "react";
import { View } from "react-native";
import { InputState } from "../hooks/useInputState";
import styled from "styled-components/native";

interface Props {
  state: InputState;
  name: string;
  password?: boolean;
}

export default function Input({
  state,
  name,
  password = false,
}: Props): ReactElement {
  return (
    <View>
      <Styled.text>{name}</Styled.text>
      <Styled.input
        onChangeText={state.handleChange}
        value={state.value}
        secureTextEntry={password}
      />
    </View>
  );
}

const Styled = {
  text: styled.Text``,
  input: styled.TextInput``,
};
