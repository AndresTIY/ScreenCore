import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import NavBar from "./components/nav-bar.js";
import Login from "./components/login.js";
import Register from "./components/register.js";
import Profile from "./components/profile.js";
import Discussion from "./components/discussion.js";
import MovieDiscuss from "./components/movie_discussion.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Route path="/navbar" component={NavBar} />
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/discussion" component={Discussion} />
          <Route exact path="/discussion/:id" component={MovieDiscuss} />

        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
