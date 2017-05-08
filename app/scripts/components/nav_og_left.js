import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavOgLeft extends React.Component {
  render() {
    return (
      <ul id="nav-mobile" className="nav-login right">
        <li>
          {" "}<i className="small material-icons">perm_identity</i>
          <Link to="/login">Login </Link>
        </li>
        <li>|</li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    );
  }
}

export default NavOgLeft;
