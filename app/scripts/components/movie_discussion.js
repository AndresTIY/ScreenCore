import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import MovieDiscussCard from "./m_card.js";
import MovieTopic from "./m_topic.js";
import createTopic from "../actions/create_topic.js";
import loadTopics from "../actions/load_topics.js";

class MovieDiscuss extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadTopics());
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
          <MovieTopic movieId={paramId} topics={topics} />

        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}
export default connect(container.allState)(MovieDiscuss);
// <form>
//   <input ref="message" placeholder="new thread" />
//   <button>Start New Thread</button>
// </form>
