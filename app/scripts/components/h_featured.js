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
        <div className="row featured-card">
          <div className="col s12 m8 l8">
            <h4 className="header">Most Popular</h4>
            <div className="card horizontal">
              <div className="card-image">
                <img src={urlPath + mostPopular.poster_path} />
              </div>
              <div className="card-stacked">
                <div className="card-content ">
                  <p>{mostPopular.title}</p>
                  <p>Release Date: {mostPopular.release_date}</p>
                  <p>Review Average: {mostPopular.vote_average}</p>
                  <p>Description: {mostPopular.overview}</p>
                </div>
                <div className="card-action">
                  <a href={"/discussion/" + mostPopular.id}>Talk about it</a>
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
