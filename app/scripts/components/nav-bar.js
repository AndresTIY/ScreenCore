import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import NavOgLeft from "./nav_og_left.js";
import NavUser from "./nav_user.js";
import container from "../containers/all.js";

class NavBar extends React.Component {
  render() {
    let hideClass = "hide";
    let showClass = "show";
    let name = "";
    if (this.props.userInfo !== null) {
      hideClass = "show";
      showClass = "hide";
      name = this.props.userInfo.username;
    }

    return (
      <nav>
        <div className="nav-wrapper">
          <h3 className="brand-logo center"><Link to="/">Screen-Core</Link></h3>
          <div className={showClass}>
            <NavOgLeft />
          </div>
          <div className={hideClass}>
            <NavUser user={name} />
          </div>
          <ul id="nav-mobile" className="right">
            <li><Link to="/discussion">Discuss</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default connect(container.allState)(NavBar);
