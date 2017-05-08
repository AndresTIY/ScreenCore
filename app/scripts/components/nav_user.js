import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavUser extends React.Component {
  render() {
    return (
      <ul id="nav-mobile" className="nav-login right">
        <li>
          <i className="small material-icons">perm_identity</i>
          <Link to="/profile">
            {" "}
            Logged In As
            {" "}
            <span className="user">{this.props.user}</span>
          </Link>
        </li>
        <li>|</li>
        <li className="logout" onClick={this.props.handleLogout}>Logout</li>
      </ul>
    );
  }
}

export default NavUser;
