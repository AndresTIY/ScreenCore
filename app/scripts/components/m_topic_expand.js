import React from "react";

class TopicExpand extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button onClick={this.props.onChange} className="btn">+</button>;
  }
}
export default TopicExpand;
