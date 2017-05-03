import api from "../api.js";

export default function createTopic() {
  $.ajax({
    url: api.url + "data/discussion",
    method: "POST",
    headers: {
      "application-id": appId,
      "secret-key": restKey,
      "Content-Type": "application/json",
      "application-type": "REST"
    },
    data: JSON.stringify({
      message: action.message,
      username: action.username
    }).then((data, success, xhr) => {
      console.log(data);
    })
  });
}

// https://api.backendless.com/v1/data/discussion
