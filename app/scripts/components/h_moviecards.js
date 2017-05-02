import React from "react";

const urlPath = "https://image.tmdb.org/t/p/w500/";

class MovieCards extends React.Component {
  render() {
    if (this.props.movies !== null) {
      return (
        <div className="row">
          <h4 className="header">Current New Releases</h4>

          {this.props.movies.map((data, i) => {
            var movieImage =
              "http://berg-group.com/wp-content/uploads/2014/11/Photo_not_available-4.jpg";
            if (data.poster_path !== null) {
              movieImage = urlPath + data.poster_path;
            }
            return (
              <div key={i} className="col s12 m3 l3">
                <div className="card medium">
                  <div className="card-image">
                    <img src={movieImage} />
                  </div>
                  <div className="card-content">
                    <p className="truncate">{data.title}</p>
                    <p>Release Date: {data.release_date}</p>
                    <p>Review Average: {data.vote_average}</p>
                  </div>
                  <div className="card-action">
                    <a href={"/discussion/" + data.id}>Talk About It</a>
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
