import "react-redux";
import { IRootState } from "./state/index";

declare module "styled-components/native";

declare module "react-redux" {
  interface DefaultRootState extends IRootState {}
}
