import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import MovieDiscussCard from "./m_card.js";
import MovieTopic from "./m_topic.js";
import DetailedView from "./m_detailed_view.js";
import NewThread from "./m_newthread.js";
import createTopic from "../actions/create_topic.js";
import loadTopics from "../actions/load_topics.js";

class MovieDiscuss extends React.Component {
  constructor(props) {
    super(props);

    this.submitTopic = this.submitTopic.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(loadTopics());
  }

  submitTopic(e, topic) {
    e.preventDefault();
    this.props.dispatch(createTopic(topic));
  }

  render() {
    let movieList = this.props.movies;
    let topics = this.props.topics;
    let paramId = this.props.match.params.id;

    if (movieList !== null) {
      let currentMovie = this.props.movies.filter(movie => {
        return movie.id === Number(paramId);
      })[0];
      return (
        <div>
          <MovieDiscussCard movie={currentMovie} />
          <h3>Discuss {currentMovie.title}!</h3>
          <NewThread onSubmit={this.submitTopic} />

          <div className="show">
            <MovieTopic movieId={paramId} topics={topics} />
          </div>
          <div className="hide">
            <DetailedView />
          </div>

        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}
export default connect(container.allState)(MovieDiscuss);
