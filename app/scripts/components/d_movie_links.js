import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MovieLinks extends React.Component {
  render() {
    return (
      <div className="main-discuss-container">
        {this.props.movies.map((movie, i) => {
          return (
            <div key={i} className="movie-titles">
              <p>
                <Link to={"/discussion/" + movie.id}>{movie.title}</Link>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieLinks;
//movie links down the line
// movie 1
// movie 2
// movie 3 etc
