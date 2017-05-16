import React from "react";
import RatingView from "./m_rating_view.js";
import UserRatingView from "./m_user_rating_view.js";
import Rate from "./m_rate.js";

const urlPath = "https://image.tmdb.org/t/p/w500/";
const urlBack = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2/";

class MovieDiscussCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let movie = this.props.movie;
    return (
      <div className="row movie-card">

        <div className="featured-backdrop">
          <img
            className="backdrop-img"
            src={`${urlBack}${movie.backdrop_path}`}
          />
        </div>

        <div className="col s12 m12 l12">
          <div className="card small horizontal">
            <div className="card-image">
              <img src={urlPath + movie.poster_path} />
            </div>
            <div className="card-stacked">
              <div className="card-content ">
                <h4 className="movie-title">{movie.title.toUpperCase()}</h4>
                <p className="release-date">
                  RELEASE DATE: {moment(movie.release_date).format("M/DD/YYYY")}
                </p>
                <RatingView voteavg={movie.vote_average} />
                <UserRatingView
                  movieId={this.props.movieId}
                  ratings={this.props.ratings}
                />
                <Rate
                  user={this.props.user}
                  handleRating={this.props.handleRating}
                />
                <p className="descrip">{movie.overview}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default MovieDiscussCard;
