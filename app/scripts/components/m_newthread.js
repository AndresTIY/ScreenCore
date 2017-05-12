import React from "react";
import ReactStars from "react-stars";

class NewThread extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  clearText() {
    this.refs.topic.value = "";
    this.refs.message.value = "";
  }

  onSubmit(e) {
    e.preventDefault();
    let topic = this.refs.topic.value;
    let message = this.refs.message.value;
    let rating = this.refs.stars.state.value;
    this.props.onSubmit(e, topic, message, rating);
    this.clearText();
    this.props.closeModal();
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  ratingChanged(newRating) {
    return newRating;
  }

  render() {
    let starColor = "#ffd700";

    return (
      <div className="custom-modal">
        <div className="add-review">
          <button onClick={this.closeModal} className="btn right">x</button>
          <form onSubmit={this.onSubmit}>
            <input ref="topic" type="text" placeholder="review topic" />
            <textarea ref="message" type="text" placeholder="review" />

            <ReactStars
              ref="stars"
              count={5}
              onChange={this.ratingChanged}
              size={24}
              color2={starColor}
            />

            <button className="btn right">
              Add Your Review
            </button>
          </form>
        </div>
        <div onClick={this.closeModal} className="custom-backdrop" />
      </div>
    );
  }
}

export default NewThread;
