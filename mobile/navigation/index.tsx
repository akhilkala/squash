import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import AuthStack from "./auth.stack";
import HomeStack from "./home.stack";

export default function Router(): ReactElement {
  const user = useSelector((state) => state.auth.user);

  return (
    <React.Fragment>{user ? <HomeStack /> : <AuthStack />}</React.Fragment>
  );
}
