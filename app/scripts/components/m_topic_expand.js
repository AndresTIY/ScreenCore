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
      <div>
        <li>
          <button onClick={this.handleTopicExpand} className="btn">
            +
          </button>

          {topics.topic}
          {" "}
          created by
          {" "}
          {topics.username}
          {" "}
          on
          {" "}
          {this.props.time}
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
