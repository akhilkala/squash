import * as React from "react";
import { View } from "react-native";

export default class App extends React.Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { error: true };
  }

  public render() {
    return <View></View>;
  }
}
