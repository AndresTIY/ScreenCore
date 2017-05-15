import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopicExpand from "./m_topic_expand.js";
import DetailedView from "./m_detailed_view.js";
import _ from "lodash";

class MovieTopic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let topics = this.props.topics;
    let movieId = Number(this.props.movieId);
    let sortedByVote = _.orderBy(topics, ["thread_vote"], ["desc", "asc"]);

    if (topics !== null) {
      return (
        <ul>
          {sortedByVote.map((topic, i) => {
            if (topic.movie_id === movieId) {
              let time = topic.created;
              let convert = moment(time).format("h:mma MM/DD/YYYY");
              return (
                <div className="topic-parent" key={topic.objectId}>
                  <TopicExpand
                    handleTopicExpand={this.handleTopicExpand}
                    handleThreadVote={this.props.handleThreadVote}
                    topics={topic}
                    time={convert}
                    id={topic.objectId}
                  />
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
