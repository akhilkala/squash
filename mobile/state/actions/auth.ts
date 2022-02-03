import { IUser } from "../../utils/types";
import { action, LOGIN, LOGOUT } from "../common";

export const login = (user: IUser) => action(LOGIN, user);
export const logout = () => action(LOGOUT);
