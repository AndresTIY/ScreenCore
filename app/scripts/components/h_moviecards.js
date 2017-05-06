import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const urlPath = "https://image.tmdb.org/t/p/w500/";

class MovieCards extends React.Component {
  render() {
    let movieList = this.props.movies;
    let sorted = _.orderBy(movieList, ["release_date"], ["desc", "asc"]);

    if (movieList !== null) {
      return (
        <div className="row">
          <h4 className="header">Current New Releases</h4>

          {sorted.map((data, i) => {
            var movieImage =
              "http://berg-group.com/wp-content/uploads/2014/11/Photo_not_available-4.jpg";
            if (data.poster_path !== null) {
              movieImage = urlPath + data.poster_path;
            }
            return (
              <div key={i} className="col s12 m3 l3">
                <div className="card medium">
                  <div className="card-image">
                    <Link to={"/discussion/" + data.id}>
                      <img src={movieImage} />
                    </Link>
                  </div>
                  <div className="card-content">
                    <p className="truncate">{data.title}</p>
                    <p>
                      Release Date:
                      {" "}
                      {moment(data.release_date).format("M/DD/YYYY")}
                    </p>
                    <p>Review Average: {data.vote_average}</p>
                  </div>
                  <div className="card-action">
                    <Link to={"/discussion/" + data.id}>Talk About It</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>Loading... </div>;
    }
  }
}
export default MovieCards;
