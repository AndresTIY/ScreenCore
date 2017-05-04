import React from "react";

class NewThread extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let message = this.refs.topic.value;
    this.props.onSubmit(e, message);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input ref="topic" type="text" placeholder="new thread" />
        <button className="btn">
          Start New Thread
        </button>
      </form>
    );
  }
}

export default NewThread;
