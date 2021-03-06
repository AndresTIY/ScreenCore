import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const urlPath = "https://image.tmdb.org/t/p/w500/";
const urlBack = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2/";

class FeaturedMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let movieList = this.props.movie;
    if (movieList !== null) {
      let sorted = _.orderBy(movieList, ["popularity"], ["desc", "asc"]);
      let mostPopular = sorted[0];
      return (
        <div className="row featured-card">
          <div className="featured-backdrop">
            <img
              className="backdrop-img"
              src={`${urlBack}${mostPopular.backdrop_path}`}
            />
          </div>
          <div className="col s12 m12 l8">
            <div className="card medium horizontal">
              <div className="card-image s2 m6">
                <Link to={"/discussion/" + mostPopular.id}>
                  <img src={urlPath + mostPopular.poster_path} />
                </Link>

              </div>
              <div className="card-stacked">
                <div className="card-content ">
                  <h6 className="header">
                    MOST POPULAR NEW RELEASE
                  </h6>

                  <h4 className="movie-title">
                    {mostPopular.title.toUpperCase()}
                  </h4>
                  <p className="release-date">
                    RELEASE DATE:
                    {" "}
                    {moment(mostPopular.release_date).format("M/DD/YYYY")}
                  </p>
                  <div className="review-section">

                    <span className="vote-avg">
                      {mostPopular.vote_average} |
                    </span>
                    <div className="vote-text">
                      <span className="avg"> AVERAGE </span><br />
                      <span className="rating"> RATING</span>
                    </div>

                  </div>
                  <p>{mostPopular.overview}</p>
                </div>
                <div className="card-link">
                  <Link to={"/discussion/" + mostPopular.id}>
                    TALK ABOUT IT &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
} // end of class

export default FeaturedMovie;
