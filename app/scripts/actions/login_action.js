import api from "../api.js";

export default function userLogin(email, pw) {
  return function(dispatch) {
    return $.ajax({
      url: api.url + "/users/login",
      method: "POST",
      contentType: "application/json",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        login: email,
        password: pw
      })
    }).then(data => {
      dispatch({ type: "USER_LOGGED_IN", data: data });
    });
  };
}
