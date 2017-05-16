import api from "../api.js";
import loadTopics from "./load_topics.js";

export default function submitVote(user, objectId, thumbsUp, thumbsDown) {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/review_vote`,
      method: "POST",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        user: user,
        reviewId: objectId,
        posVote: thumbsUp,
        negVote: thumbsDown,
        hasVoted: true
      })
    }).then((data, success, xhr) => {
      dispatch(loadTopics());
    });
  };
}
