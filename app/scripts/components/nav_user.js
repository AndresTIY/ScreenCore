import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavUser extends React.Component {
  render() {
    return (
      <ul id="nav-mobile" className="right">
        <li><Link to="/profile">Logged In As {this.props.user}</Link></li>
      </ul>
    );
  }
}

export default NavUser;
