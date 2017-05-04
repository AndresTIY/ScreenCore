import api from "../api.js";

export default function createTopic(topic) {
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
        username: "user",
        topic: topic,
        message: "message",
        movie_id: 123
      })
    }).then((data, success, xhr) => {
      console.log(data);
    });
  };
}

// https://api.backendless.com/v1/data/discussion
// username: action.username
