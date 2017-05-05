import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import userLogin from "../actions/login_action.js";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let pw = this.refs.pw.value;
    this.props.dispatch(userLogin(email, pw, this.props.history));
  }

  render() {
    return (
      <div className="card login-card">
        <div className="row">
          <form onSubmit={this.loginUser}>
            <div className="input-field col s6 m6 l6">
              <label htmlFor="email">Email</label>
              <input ref="email" type="text" value="user@example.com" />
            </div>
            <div className="input-field col s6 m6 l6">
              <label htmlFor="password">Password</label>
              <input ref="pw" type="password" value="password" />
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
export default connect(container.allState)(Login);
