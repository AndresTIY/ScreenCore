import api from "../api.js";
export default function loadTopics() {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/discussion`,
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      }
    }).then(function(topics, success, xhr) {
      dispatch({ type: "LOAD_TOPICS", topics: topics });
    });
  };
}
// https://api.backendless.com/v1/data/discussion
