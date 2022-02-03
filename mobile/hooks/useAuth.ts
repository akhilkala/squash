import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import api from "../utils/api.service";
import {
  login as loginAction,
  logout as logoutAction,
} from "../state/actions/auth";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../utils/types";
import Toast from "react-native-toast-message";

export default function useAuth() {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const register = async (name: string, email: string, password: string) => {
    try {
      if (!name || !email || !password) return;
      setLoading(true);
      await api.post(`/auth/register`, {
        name,
        email: email.trim().toLowerCase(),
        password,
      });
      setLoading(false);
      navigation.navigate("Login");
      Toast.show({
        type: "info",
        text1: "Verification mail sent!",
      });
    } catch (err: any) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await api.post(`/auth/login`, {
        email: email.trim().toLowerCase(),
        password,
      });
      setLoading(false);
      const user: IUser = jwt_decode(res.accessToken);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      dispatch(loginAction(user));
    } catch (err: any) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    dispatch(logoutAction());
  };

  return {
    register,
    login,
    logout,
    error,
    loading,
  };
}
