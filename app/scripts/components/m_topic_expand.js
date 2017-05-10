import React from "react";
import DetailedView from "./m_detailed_view.js";

class TopicExpand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topicExpand: false };
    this.handleTopicExpand = this.handleTopicExpand.bind(this);
  }

  handleTopicExpand() {
    this.setState({
      topicExpand: !this.state.topicExpand
    });
  }
  render() {
    let topics = this.props.topics;
    let classToggle = "hide";
    if (this.state.topicExpand) {
      classToggle = "show";
    }
    return (
      <div className="topic-section">
        <li>
          <span className="username">{topics.username}</span>
          {" "}
          <span className="time">posted on {this.props.time}</span>
          {" "}
          <p>
            <span onClick={this.handleTopicExpand} className="topic">
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
