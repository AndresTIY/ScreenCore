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
      <div className="custom-modal">
        <div className="add-review">
          <form onSubmit={this.onSubmit.bind(this)}>
            <input ref="topic" type="text" placeholder="review topic" />
            <textarea ref="message" type="text" placeholder="review" />
            <button className="btn right">
              Add Your Review
            </button>
          </form>
        </div>
        <div className="custom-backdrop" />
      </div>
    );
  }
}

export default NewThread;
