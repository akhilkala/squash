import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import store from "./state";
import Theme from "./Theme";
import Router from "./navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, logout } from "./state/actions/auth";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem("user");
      if (json) dispatch(login(JSON.parse(json)));
      else dispatch(logout());
    })();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Theme>
          <Router />
          <Toast autoHide visibilityTime={2600} />
        </Theme>
      </Provider>
    </NavigationContainer>
  );
}
