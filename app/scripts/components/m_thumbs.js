import React from "react";

class ThumbVote extends React.Component {
  filterUserVotes() {
    let objectId = this.props.objectId;
    let user = this.props.user;

    this.props.userVotes.forEach((data, i) => {
      if (data["reviewId"] === objectId && data["user"] === user.username) {
        console.log(objectId);
      }
    });
  }

  // componentDidMount() {
  //   this.filterUserVotes();
  // }
  render() {
    let threadValue = this.props.threadVotes;
    let totalVotes = this.props.totalVotes;
    let negVotes = this.props.negVotes;
    let posVotes = this.props.posVotes;
    let user = this.props.user;
    let userVotes = this.props.userVotes;
    let disableThumbs = "hide";
    let activeThumbs = "thumbs";
    if (user !== null) {
      disableThumbs = "thumbs";
      activeThumbs = "hide";
    }
    if (threadValue > 0) {
      threadValue = "+" + threadValue;
    }

    return (
      <div className="thumb-vote">

        <div className={disableThumbs}>
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
          Review Rating: <span className="thread-rating"> {threadValue} </span>
          Out of
          {" "}
          <span className="thread-rating"> {totalVotes} </span>
          {" "}
          total votes
          <i className="tiny-thumb disable-hover tiny material-icons">
            thumb_up
          </i>
          {" "}
          :
          {" "}
          <span className="thread-rating"> {posVotes} </span>
          <i className="tiny-thumb disable-hover tiny material-icons">
            thumb_down
          </i>
          {" "}
          :
          {" "}
          <span className="thread-rating"> {negVotes} </span>
        </div>

        <div className={activeThumbs}>

          <i className="disable-hover thumb small material-icons">
            thumb_up{" "}
          </i>
          Rate
          <i className="disable-hover thumb small material-icons">
            thumb_down{" "}
          </i>
          Review Rating: <span className="thread-rating"> {threadValue} </span>
          Out of
          {" "}
          <span className="thread-rating"> {totalVotes} </span>
          {" "}
          total votes
          <i className="tiny-thumb disable-hover tiny material-icons">
            thumb_up
          </i>
          {" "}
          :
          {" "}
          <span className="thread-rating"> {posVotes} </span>
          <i className="tiny-thumb disable-hover tiny material-icons">
            thumb_down
          </i>
          {" "}
          :
          {" "}
          <span className="thread-rating"> {negVotes} </span>
        </div>

      </div>
    );
  }
}
export default ThumbVote;
// onClick={this.props.handleThreadVote}
