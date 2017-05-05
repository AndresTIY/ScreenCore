import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MovieTopic extends React.Component {
  render() {
    let topics = this.props.topics;
    let movieId = Number(this.props.movieId);
    if (topics !== null) {
      return (
        <ul>
          {this.props.topics.map((topic, i) => {
            if (topic.movie_id === movieId) {
              let time = topic.created;
              let convert = moment(time).format("h:mma MM/DD/YYYY");
              return (
                <li key={topic.objectId}>

                  {topic.topic}
                  {" "}
                  created by
                  {" "}
                  {topic.username}
                  {" "}
                  on
                  {" "}
                  {convert}
                  {" "}

                </li>
              );
            }
          })}
        </ul>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
} //end of movie topic

export default MovieTopic;
// "discussion/"+movieId+topic.subject
// <Link to={`${movieId}/${topic.subject}`}></Link>
