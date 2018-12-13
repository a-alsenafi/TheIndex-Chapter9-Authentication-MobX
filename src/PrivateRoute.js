import React from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

import authStore from "./stores/AuthStore";

const PrivateRoute = ({ component: Component, redirectUrl, ...rest }) => {
  if (!authStore.user) return <Route {...rest} component={Component} />;
  else return <Redirect to={redirectUrl || "/"} />;
};

export default observer(PrivateRoute);
