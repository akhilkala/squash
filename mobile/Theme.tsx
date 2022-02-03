import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components/native";
import { Children } from "./utils/types";

const theme = {
  text: "#fefefe",
  background: "#212121",
  blue: "#36AABC",
};

export default function Theme(props: Children): ReactElement {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
