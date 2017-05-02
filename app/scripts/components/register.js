import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import registerUser from "../actions/register_user.js";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.createUser = this.createUser.bind(this);
  }

  createUser(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let pw = this.refs.pw.value;
    let name = this.refs.name.value;
    let username = this.refs.username.value;
    this.props.dispatch(
      registerUser(name, username, email, pw, this.props.history)
    );
  }

  render() {
    return (
      <div className="card login-card">
        <div className="row">
          <form onSubmit={this.createUser}>
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
export default connect(container.allState)(Register);
