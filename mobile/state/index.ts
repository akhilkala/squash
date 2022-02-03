import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import api from "../utils/api.service";
import logger from "redux-logger";
import authReducer, { IAuthState } from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api), logger)
);

export interface IRootState {
  auth: IAuthState;
}

export default store;
