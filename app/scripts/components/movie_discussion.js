import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";

class MovieDiscuss extends React.Component {
  render() {
    let paramId = this.props.match.params.id;
    console.log(paramId);
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

export default connect(container.allState)(MovieDiscuss);
