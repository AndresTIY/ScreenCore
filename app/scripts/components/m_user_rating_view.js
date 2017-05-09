import React from "react";

class UserRatingView extends React.Component {
  render() {
    return (
      <div className="user-review-section">
        <span className="vote-avg">5.5 |</span>
        <div className="vote-text">
          <span className="avg"> USER AVERAGE</span><br />
          <span className="rating"> RATING</span><br />
        </div>
      </div>
    );
  }
}
export default UserRatingView;
// <p className="user-rating">rated by 3 users</p>
