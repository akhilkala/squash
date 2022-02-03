export const action = (type: string, payload?: any) => ({ type, payload });

export interface IAction {
  type: string;
  payload?: any;
}

export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
