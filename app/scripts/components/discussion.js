import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import loadMovies from "../actions/load_movies.js";
import MovieLinks from "./d_movie_links.js";

class Discussion extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(loadMovies());
  }
  render() {
    let movies = this.props.movies;
    if (movies === null) {
      return <p>loading...</p>;
    } else {
      return <MovieLinks movies={movies} />;
    }
  }
}
export default connect(container.allState)(Discussion);
