import api from "../api.js";

export default function userLogout(token, history) {
  return function(dispatch) {
    return $.ajax({
      url: api.url + "/users/logout",
      method: "GET",
      contentType: "application/json",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "user-token": token,
        "application-type": "REST"
      }
    }).then(data => {
      dispatch({ type: "CLEAR_USER" });
      history.push("/");
    });
  };
}
