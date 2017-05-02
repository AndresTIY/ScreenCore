//featured homepage movie goes here
import React from "react";
import _ from "lodash";

const urlPath = "https://image.tmdb.org/t/p/w500/";

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
        <div className="row">
          <div className="col s12 m8 l8">
            <div className="card horizontal">
              <div className="card-image">
                <img src={urlPath + mostPopular.poster_path} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{mostPopular.title}</p>
                  <p>Release Date: {mostPopular.release_date}</p>
                  <p>Review Average: {mostPopular.vote_average}</p>
                </div>
                <div className="card-action">
                  <a href="#">Link</a>
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
