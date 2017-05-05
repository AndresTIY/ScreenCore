import React from "react";

class NewThread extends React.Component {
  clearText() {
    this.refs.topic.value = "";
    this.refs.message.value = "";
  }
  onSubmit(e) {
    e.preventDefault();
    let topic = this.refs.topic.value;
    let message = this.refs.message.value;
    this.props.onSubmit(e, topic, message);
    this.clearText();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input ref="topic" type="text" placeholder="new thread topic" />
        <input ref="message" type="text" placeholder="message" />
        <button className="btn">
          Start New Thread
        </button>
      </form>
    );
  }
}

export default NewThread;
