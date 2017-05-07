import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavOgLeft extends React.Component {
  render() {
    return (
      <ul id="nav-mobile" className="nav-login right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    );
  }
}

export default NavOgLeft;
