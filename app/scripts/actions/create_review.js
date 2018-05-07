import api from "../api.js";
import loadTopics from "../actions/load_topics.js";

export default function createReview(user, topic, message, id, rating) {
  return function(dispatch) {
    $.ajax({
      url: api.url + "/data/discussion",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        username: user,
        topic: topic,
        message: message,
        movie_id: id,
        rating: rating,
        positive_vote_count: 0,
        negative_vote_count: 0,
        thread_vote_count: 0,
        thread_vote: 0
      })
    }).then((data, success, xhr) => {
      dispatch(loadTopics());
    });
  };
}
