import React from "react";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ rating: newRating });
  }

  render() {
    return (
      <div className="rate">
        <p>Have you seen this movie? Give it a rating!</p>
        <div className="icon-scale">
          <i className="star material-icons">star</i>
          <i className="star material-icons">star</i>
          <i className="star material-icons">star</i>
          <i className="star material-icons">star</i>
          <i className="star material-icons">star</i>

        </div>
      </div>
    );
  }
} //end of rate
export default Rate;
