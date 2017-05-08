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

        <div className="featured-backdrop">
          <img
            className="backdrop-img"
            src={`${urlBack}${movie.backdrop_path}`}
          />
        </div>

        <div className="col s12 m8 l8">
          <div className="card medium horizontal">
            <div className="card-image">
              <img src={urlPath + movie.poster_path} />
            </div>
            <div className="card-stacked">
              <div className="card-content ">
                <h4 className="movie-title">{movie.title.toUpperCase()}</h4>
                <p className="release-date">
                  RELEASE DATE: {moment(movie.release_date).format("M/DD/YYYY")}
                </p>
                <div className="review-section">
                  <span className="vote-avg">{movie.vote_average} |</span>
                  <div className="vote-text">
                    <span className="avg"> AVERAGE </span><br />
                    <span className="rating"> RATING</span>
                  </div>
                </div>
                <p>{movie.overview}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
} // end of class
export default MovieDiscussCard;
