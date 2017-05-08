import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import NavOgLeft from "./nav_og_left.js";
import NavUser from "./nav_user.js";
import container from "../containers/all.js";
import loadMovies from "../actions/load_movies.js";

class NavBar extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadMovies());
  }
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
          <h3 className="brand-logo left"><Link to="/">ScreenCore</Link></h3>
          <div className={showClass}>
            <NavOgLeft />
          </div>
          <div className={hideClass}>
            <NavUser user={name} />
          </div>
          <ul id="nav-mobile" className="nav-links">
            <li><Link to="/discussion">Discuss It</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default connect(container.allState)(NavBar);
