import React from "react";

const urlPath = "https://image.tmdb.org/t/p/w500/";
const urlBack = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2/";

class MovieDiscussCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let movie = this.props.movie;
    return (
      <div className="row featured-card">

        <div className="col s12 m8 l8">
          <div className="card horizontal">
            <div className="card-image">
              <img src={urlPath + movie.poster_path} />
            </div>
            <div className="card-stacked">
              <div className="card-content ">
                <p>{movie.title}</p>
                <p>
                  Release Date: {moment(movie.release_date).format("M/DD/YYYY")}
                </p>
                <p>Review Average: {movie.vote_average}</p>
                <p>Description: {movie.overview}</p>
              </div>

            </div>
          </div>
          <div className="backdrop-poster">
            <img
              className="backdrop-img"
              src={`${urlBack}${movie.backdrop_path}`}
            />
          </div>
        </div>
      </div>
    );
  }
} // end of class
export default MovieDiscussCard;
