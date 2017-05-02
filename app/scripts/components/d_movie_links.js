import React from "react";

class MovieLinks extends React.Component {
  render() {
    return (
      <div className="main-discuss-container">
        {this.props.movies.map((movie, i) => {
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

export default MovieLinks;
//movie links down the line
// movie 1
// movie 2
// movie 3 etc
