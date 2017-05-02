import React from "react";

const urlPath = "https://image.tmdb.org/t/p/w500/";

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
                <p>Release Date: {movie.release_date}</p>
                <p>Review Average: {movie.vote_average}</p>
                <p>Description: {movie.overview}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
} // end of class
export default MovieDiscussCard;
