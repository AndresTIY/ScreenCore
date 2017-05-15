import React from "react";
import DetailedView from "./m_detailed_view.js";
import ReactStars from "react-stars";
import ThumbVote from "./m_thumbs.js";
import updateThreadVote from "../actions/update_thread_vote.js";

class TopicExpand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topicExpand: false };
    this.handleTopicExpand = this.handleTopicExpand.bind(this);
    this.totalThreadVotes = this.totalThreadVotes.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleTopicExpand() {
    this.setState({
      topicExpand: !this.state.topicExpand
    });
  }

  totalThreadVotes() {
    console.log(this.props.topics);
  }
  handleVote(num) {
    //if this.props.topics is empty, run newVote action
    //if this.props.topics is !empty, run updateVote action
    let voteCount = this.props.topics.thread_vote;
    let objectId = this.props.topics.objectId;
    let totalVotes = this.props.topics.thread_vote_count;
    let negVotes = this.props.topics.negative_vote_count;
    let posVotes = this.props.topics.positive_vote_count;
    if (num === 1) {
      voteCount = voteCount + 1;
      posVotes = posVotes + 1;
    }
    if (num === -1) {
      voteCount = voteCount - 1;
      negVotes = negVotes + 1;
    }
    totalVotes = totalVotes + 1;
    console.log(
      objectId,
      "voteCount:",
      voteCount,
      "neg:",
      negVotes,
      "pos",
      posVotes,
      "total",
      totalVotes
    );
    this.props.handleThreadVote(
      objectId,
      voteCount,
      negVotes,
      posVotes,
      totalVotes
    );
  }

  //negative_vote_count
  //positive_vote_count
  //thread_vote_count
  //thread_vote

  // handleThreadVote={this.props.handleThreadVote}
  render() {
    let topics = this.props.topics;
    let classToggle = "hide";
    let clickChangeIcon = "[ + ]";
    let userStyle = "username";

    if (this.state.topicExpand) {
      classToggle = "show";
      clickChangeIcon = "[ - ]";
      userStyle = "italic";
    }
    return (
      <div className="topic-section">
        <li>
          Rate This Review
          <ThumbVote
            threadVotes={topics.thread_vote}
            totalVotes={topics.thread_vote_count}
            negVotes={topics.negative_vote_count}
            posVotes={topics.positive_vote_count}
            handleVote={this.handleVote}
          />
          <span onClick={this.handleTopicExpand} className="plus-click">
            {clickChangeIcon}
          </span>
          <span className={userStyle}> {topics.username}</span>
          {" "}
          <span className="time">posted on {this.props.time}</span>
          {" "}
          <div>
            <ReactStars
              edit={false}
              count={topics.rating}
              size={10}
              color1={"#ffd700"}
            />
          </div>
          <p>
            <span className="topic">
              {topics.topic}
            </span>
          </p>
          {" "}

        </li>
        <li>
          <div className={classToggle}>
            <DetailedView message={topics.message} />
          </div>
        </li>
      </div>
    );
  }
}
export default TopicExpand;
