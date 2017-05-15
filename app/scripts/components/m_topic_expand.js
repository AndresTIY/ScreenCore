import React from "react";
import DetailedView from "./m_detailed_view.js";
import ReactStars from "react-stars";
import ThumbVote from "./m_thumbs.js";

class TopicExpand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topicExpand: false };
    this.handleTopicExpand = this.handleTopicExpand.bind(this);
    this.totalThreadVotes = this.totalThreadVotes.bind(this);
  }

  handleTopicExpand() {
    this.setState({
      topicExpand: !this.state.topicExpand
    });
  }

  totalThreadVotes() {
    console.log(this.props.topics);
  }

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
            threadvotes={topics.thread_vote}
            handleThreadVote={this.totalThreadVotes}
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
