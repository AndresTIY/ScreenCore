import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import NavBar from "./nav-bar.js";

class AppRoot extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
      </main>
    );
  }
}

export default AppRoot;
