import React from "react";

class ThumbVote extends React.Component {
  render() {
    let threadValue = this.props.threadvotes;
    return (
      <div className="thumbs">
        <i className="tiny material-icons">
          thumb_up{" "}
        </i>
        <i className="tiny material-icons">
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
// onClick={this.props.handleThreadVote}
