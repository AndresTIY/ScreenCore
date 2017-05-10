import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import NavOgLeft from "./nav_og_left.js";
import NavUser from "./nav_user.js";
import container from "../containers/all.js";
import loadMovies from "../actions/load_movies.js";
import loadRatings from "../actions/load_ratings.js";
import userLogout from "../actions/logout_action.js";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loadMovies());
    this.props.dispatch(loadRatings());
  }
  logoutUser(e) {
    e.preventDefault();
    let token = this.props.userInfo["user-token"];
    this.props.dispatch(userLogout(token, this.props.history));
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
            <NavUser handleLogout={this.logoutUser} user={name} />
          </div>

        </div>
      </nav>
    );
  }
}
export default connect(container.allState)(NavBar);
// <ul id="nav-mobile" className="nav-links">
//   <li><Link to="/discussion">Discuss It</Link></li>
// </ul>
