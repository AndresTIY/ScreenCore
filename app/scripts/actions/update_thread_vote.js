import api from "../api.js";
import submitVote from "./submit_vote.js";

export default function updateThreadVote(
  user,
  objectId,
  voteCount,
  negVotes,
  posVotes,
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
        positive_vote_count: posVotes,
        negative_vote_count: negVotes,
        thread_vote_count: totalVotes,
        thread_vote: voteCount
      })
    });
  };
}
