import React from "react";
import ReactStars from "react-stars";

class Rate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ratingChanged = newRating => {
      console.log(newRating);
      this.props.handleRating(newRating);
    };
    return (
      <div className="rate">
        <p>Have you seen this movie? Give it a rating!</p>
        <div className="stars">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />
        </div>
      </div>
    );
  }
} //end of rate
export default Rate;
