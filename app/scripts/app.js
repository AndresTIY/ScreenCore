import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import NavBar from "./components/nav-bar.js";
import Login from "./components/login.js";
import Register from "./components/register.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route path="/navbar" component={NavBar} />
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
