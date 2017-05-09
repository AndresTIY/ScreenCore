import React from "react";
//allows user to view established rating
class RatingView extends React.Component {
  render() {
    return (
      <div className="review-section">
        <span className="vote-avg">{this.props.voteavg} |</span>
        <div className="vote-text">
          <span className="avg"> AVERAGE </span><br />
          <span className="rating"> RATING</span>
        </div>
      </div>
    );
  }
}
export default RatingView;
