import React from "react";

class MovieTopic extends React.Component {
  render() {
    let topics = this.props.topics;
    let movieId = this.props.movieId;
    if (topics !== null) {
      return (
        <ul>
          {this.props.topics.map((topic, i) => {
            return <li key={topic.objectId}>{topic.subject}</li>;
          })}
        </ul>
      );
    } else {
      return <p>loading...</p>;
    }
  }
} //end of movie topic

export default MovieTopic;
