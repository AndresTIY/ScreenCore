import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import loadMovies from "../actions/load_movies.js";

class MovieDiscuss extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadMovies());
  }

  render() {
    let movieList = this.props.movies;
    let paramId = this.props.match.params.id;
    if (movieList !== null) {
      let currentMovie = this.props.movies.filter(movie => {
        return movie.id === Number(paramId);
      })[0];
      console.log(currentMovie);
      return (
        <div>
          <form>
            <h3>Talk about that movie</h3>
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
