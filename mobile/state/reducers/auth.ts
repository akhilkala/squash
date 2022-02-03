import { IUser, Nullable } from "../../utils/types";
import { IAction, LOGIN, LOGOUT } from "../common";

export type IAuthState = {
  user: Nullable<IUser>;
  loading: boolean;
};

const INITIAL_STATE: IAuthState = {
  user: null,
  loading: true,
};

const reducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
        loading: false,
      };
    case LOGOUT:
      return { user: null, loading: false };

    default:
      return state;
  }
};

export default reducer;
