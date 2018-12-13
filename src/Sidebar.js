import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "./stores/AuthStore";
import Logout from "./Logout";
// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
          <h4 className="menu-item">
            <NavLink to="/books">BOOKS</NavLink>
          </h4>
          <div>
            {authStore.user ? (
              <Logout />
            ) : (
              <div>
                {" "}
                <h4 className="menu-item">
                  <NavLink to="/signup">SIGNUP</NavLink>
                </h4>
                <h4 className="menu-item">
                  <NavLink to="/login">LOGIN</NavLink>
                </h4>{" "}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default observer(Sidebar);
