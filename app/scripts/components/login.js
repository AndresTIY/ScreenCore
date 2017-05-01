import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card login-card">
        <div className="row">
          <form onSubmit={"action"}>
            <div className="input-field col s6 m6 l6">
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className="input-field col s6 m6 l6">
              <label htmlFor="password">Password</label>
              <input type="password" />
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
export default Login;
