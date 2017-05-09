import React from "react";

class UserRatingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anyVotes: true };
    this.filterAndAvg = this.filterAndAvg.bind(this);
  }

  filterAndAvg() {
    let ratings = this.props.ratings;
    let id = this.props.movieId;

    if (ratings === null || id === null) {
      return;
    }

    let avgRating = ratings.reduce((acc, movie) => {
      if (movie.movie_id == id) {
        acc.push(movie.rating);
      }

      return acc;
    }, []);
    if (avgRating.length < 1) {
      return <span className="no-votes">No votes yet</span>;
    }
    let avg = avgRating.reduce((a, b) => a + b) / avgRating.length;
    let decFixed = avg.toFixed(1);
    console.log(decFixed);
    return decFixed;
  }

  // componentWillMount() {
  //   return this.filterAndAvg();
  // }

  render() {
    return (
      <div className="user-review-section">
        <span className="vote-avg">{this.filterAndAvg()} |</span>
        <div className="vote-text">
          <span className="avg"> USER AVERAGE</span><br />
          <span className="rating"> RATING</span><br />
        </div>
      </div>
    );
  }
}
export default UserRatingView;
