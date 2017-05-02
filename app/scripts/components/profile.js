import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card login-card">
        <div className="row">
          <h3 className="header">Nothing here works yet</h3>
          <form>
            <div className="input-field col s6 m6 l6">
              <label htmlFor="name">First Name</label>
              <input ref="name" type="text" />
            </div>
            <div className="input-field col s6 m6 l6">
              <label htmlFor="username">username</label>
              <input ref="username" type="text" />
            </div>
            <div className="input-field col s6 m6 l6">
              <label htmlFor="email">Email</label>
              <input ref="email" type="text" />
            </div>
            <div className="input-field center col s6 m6 l6">
              <label htmlFor="password">Password</label>
              <input ref="pw" type="password" />
            </div>

            <div className="login-btn-div">
              <button className="btn login-btn" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
// export default Login;
export default connect(container.allState)(Profile);
