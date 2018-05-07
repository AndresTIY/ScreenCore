import api from "../api.js";

export default function submitRating(rating, id, user) {
  return function(dispatch) {
    $.ajax({
      url: api.url + "/data/ratings",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        rating: rating,
        movie_id: id,
        user: user
      })
    }).then((data, success, xhr) => {
      console.log(data);
    });
  };
}
