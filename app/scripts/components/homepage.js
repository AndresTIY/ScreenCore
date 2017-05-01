import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import loadMovies from "../actions/load_movies.js";
import MovieCards from "./h_moviecards.js";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(loadMovies());
  }
  render() {
    return <MovieCards movies={this.props.movies} />;
  }
}

export default connect(container.allState)(HomePage);
