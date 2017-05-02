import React from "react";

class MovieDiscuss extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h3>Talk about that movie</h3>
          <input placeholder="new thread" />
          <button>Start New Thread</button>
        </form>
      </div>
    );
  }
}

export default MovieDiscuss;
