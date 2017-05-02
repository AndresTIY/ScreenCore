import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import MovieDiscussCard from "./m_card.js";

class MovieDiscuss extends React.Component {
  render() {
    let movieList = this.props.movies;
    let paramId = this.props.match.params.id;

    if (movieList !== null) {
      let currentMovie = this.props.movies.filter(movie => {
        return movie.id === Number(paramId);
      })[0];
      return (
        <div>
          <MovieDiscussCard movie={currentMovie} />
          <form>
            <h3>Discuss {currentMovie.title}!</h3>
            <input placeholder="new thread" />
            <button>Start New Thread</button>
          </form>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}
export default connect(container.allState)(MovieDiscuss);
