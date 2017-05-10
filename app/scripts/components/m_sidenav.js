import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MovieSideNav extends React.Component {
  render() {
    if (this.props.movies !== null) {
      return (
        <div className="sidenav">
          <ul>
            <h5 className="header">Discuss It</h5>
            {this.props.movies.map((movie, i) => {
              return (
                <li key={i}>
                  <Link to={"/discussion/" + movie.id}>{movie.title}</Link>
                </li>
              );
            })}
          </ul>

        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}

export default MovieSideNav;
