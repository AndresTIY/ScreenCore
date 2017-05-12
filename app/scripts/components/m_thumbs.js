import React from "react";

class ThumbVote extends React.Component {
  render() {
    let threadValue = "+10";
    return (
      <div className="thumbs">
        <i
          onClick={this.props.handleThreadVote}
          className="tiny material-icons"
        >
          thumb_up{" "}
        </i>
        <i
          onClick={this.props.handleThreadVote}
          className="tiny material-icons"
        >
          thumb_down{" "}
        </i>
        <span className="thread-rating">
          {threadValue}
        </span>
      </div>
    );
  }
}
export default ThumbVote;
