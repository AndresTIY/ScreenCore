import api from "../api.js";
export default function loadVotes() {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/review_vote`,
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      }
    }).then(function(data, success, xhr) {
      dispatch({ type: "LOAD_VOTES", data: data.data });
    });
  };
}
