import React from "react";

class DetailedView extends React.Component {
  render() {
    return <div className="review-body">{this.props.message}</div>;
  }
}
export default DetailedView;
