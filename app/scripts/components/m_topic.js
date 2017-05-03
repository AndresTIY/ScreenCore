import React from "react";

class MovieTopic extends React.Component {
  render() {
    let topics = this.props.topics;
    let movieId = this.props.movieId;
    console.log(movieId);
    if (topics !== null) {
      console.log("topics:", topics);
      topics.map((topic, i) => {
        console.log(topic);
      });
      return <li>hello</li>;
    } else {
      return <p>loading...</p>;
    }
  }
} //end of movie topic

export default MovieTopic;
