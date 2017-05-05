import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopicExpand from "./m_topic_expand.js";
import DetailedView from "./m_detailed_view.js";

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
                <div key={topic.objectId}>
                  <li>
                    <TopicExpand />

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
                  <li>
                    <div className="show">
                      <DetailedView message={topic.message} />
                    </div>

                  </li>
                </div>
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
