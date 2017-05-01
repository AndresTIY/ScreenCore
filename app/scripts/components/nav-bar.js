import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <h3 className="brand-logo center"><Link to="/">Screen-Core</Link></h3>
          <ul id="nav-mobile" className="left">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li><Link to="/discussion">Discuss</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
