import api from "../api.js";

export default function userLogin(email, pw, history) {
  return function(dispatch) {
    return $.ajax({
      url: api.url + "/users/login",
      method: "POST",
      contentType: "application/json",
      headers: {
        // "application-id": api.appId,
        // "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        login: email,
        password: pw
      })
    }).then(data => {
      dispatch({ type: "USER_LOGGED_IN", data: data });
      history.push("/");
    });
  };
}

// https://api.backendless.com/C2927B9F-EF65-363C-FFFB-877EF1FDFC00/BADA0FE2-2067-6222-FF59-28ED062B5300/data/Users
