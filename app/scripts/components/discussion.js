import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import loadMovies from "../actions/load_movies.js";

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
      return (
        <div className="main-discuss-container">
          {movies.map((movie, i) => {
            return (
              <div key={i} className="movie-titles">
                <p>{movie.title}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
export default connect(container.allState)(Discussion);
//movie links down the line
// movie 1
// movie 2
// movie 3 etc
