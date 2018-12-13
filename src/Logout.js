import React from "react";
import { observer } from "mobx-react";

import authStore from "./stores/AuthStore";

const Logout = props => {
  return (
    <button className="btn btn-danger" onClick={() => authStore.logoutUser()}>
      Logout {authStore.user.username}
    </button>
  );
};

export default observer(Logout);
