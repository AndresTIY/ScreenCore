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
    let starColor = "#ffd700";
    let showClass = "show";
    let hideClass = "hide";
    let starsClass = "stars ";

    if (this.props.user === null) {
      showClass = "hide";
      hideClass = "show";
      starsClass = "stars disabled";
    }
    return (
      <div className="rate">
        <p className={showClass}>Have you seen this movie? Give it a rating!</p>
        <p className={hideClass}>Please login to submit your vote!</p>
        <div className={starsClass}>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={starColor}
          />
          {" "}
        </div>
      </div>
    );
  }
} //end of rate
export default Rate;
