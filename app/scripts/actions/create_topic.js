import api from "../api.js";
import loadTopics from "../actions/load_topics.js";

export default function createTopic(user, topic, message, id) {
  return function(dispatch) {
    $.ajax({
      url: api.url + "/data/discussion",
      method: "POST",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        username: user,
        topic: topic,
        message: message,
        movie_id: id
      })
    }).then((data, success, xhr) => {
      dispatch(loadTopics());
    });
  };
}

// https://api.backendless.com/v1/data/discussion
// username: action.username
