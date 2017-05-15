import api from "../api.js";

export default function updateThreadVote(
  objectId,
  voteCount,
  negativeVotes,
  positiveVotes,
  totalVotes
) {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/discussion/${objectId}`,
      method: "PUT",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        positive_vote_count: positiveVotes,
        negative_vote_count: negativeVotes,
        thread_vote_count: totalVotes,
        thread_vote: voteCount
      })
    }).then((data, success, xhr) => {
      console.log(data);
    });
  };
}
