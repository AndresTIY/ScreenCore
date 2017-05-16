import React from "react";

class ThumbVote extends React.Component {
  render() {
    let threadValue = this.props.threadVotes;
    let totalVotes = this.props.totalVotes;
    let negVotes = this.props.negVotes;
    let posVotes = this.props.posVotes;

    return (
      <div className="thumbs">
        <i
          onClick={() => this.props.handleVote(1)}
          className="thumb small material-icons"
        >
          thumb_up{" "}
        </i>
        Rate
        <i
          onClick={() => this.props.handleVote(-1)}
          className="thumb small material-icons"
        >
          thumb_down{" "}
        </i>
        Thread Rating: <span className="thread-rating"> {threadValue} </span>
        Total Votes: <span className="thread-rating"> {totalVotes} </span>
        Positive Votes: <span className="thread-rating"> {negVotes} </span>
        Negative Votes: <span className="thread-rating"> {posVotes} </span>
      </div>
    );
  }
}
export default ThumbVote;
// onClick={this.props.handleThreadVote}
