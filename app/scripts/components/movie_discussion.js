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
    this.currentMovie = this.currentMovie.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(loadTopics());
  }

  currentMovie(paramsId) {
    if (this.props.movies === null) {
      return;
    }
    let currentMovie = this.props.movies.filter(movie => {
      return movie.id === Number(paramsId);
    })[0];

    return currentMovie;
  }

  submitTopic(e, topic, message) {
    e.preventDefault();
    let paramId = this.props.match.params.id;
    let currMov = this.currentMovie(paramId);
    let id = currMov.id;
    this.props.dispatch(createTopic(topic, message, id));
  }

  render() {
    let movieList = this.props.movies;
    let topics = this.props.topics;
    let paramId = this.props.match.params.id;
    let currentMovie = this.currentMovie(paramId);

    if (movieList !== null) {
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
