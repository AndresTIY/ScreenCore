import api from "../api.js";
export default function loadMovies() {
  return function(dispatch) {
    $.ajax({
      url: `${api.mdbUrl}${api.dateRange}${api.mdbApiKey}`,
      method: "GET"
    }).then(function(data, success, xhr) {
      dispatch({ type: "LOAD_NEW_MOVIES", data: data.results });
    });
  };
}
