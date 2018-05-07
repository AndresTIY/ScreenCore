import api from "../api.js";
import userLogin from "./login_action.js";

export default function registerUser(name, username, email, pw, history) {
  return function(dispatch) {
    $.ajax({
      url: api.url + "/data/Users",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        fullName: name,
        username: username,
        email: email,
        password: pw
      })
    }).then(function(data, success, xhr) {
      dispatch(userLogin(email, pw, history));
    });
  };
}
