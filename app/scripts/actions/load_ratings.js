import api from "../api.js";
export default function loadRatings() {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/ratings`,
      method: "GET",
      dataType: "JSON",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      }
    }).then(function(data, success, xhr) {
      dispatch({ type: "LOAD_RATINGS", data: data.data });
    });
  };
}
