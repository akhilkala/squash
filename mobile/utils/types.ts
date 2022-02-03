import { ReactElement } from "react";
import { Dispatch } from "redux";
import { APIService } from "./api.service";

export type Nullable<T> = T | null;

export type Children = {
  children: ReactElement | ReactElement[];
};

export type Thunk<T = {}> = (
  args?: T
) => (dispatch: Dispatch<any>, getState: () => any, api: APIService) => void;

export type IUser = {
  _id: string;
  name: string;
  email: string;
};
