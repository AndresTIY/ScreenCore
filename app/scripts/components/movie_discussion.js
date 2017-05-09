import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import MovieDiscussCard from "./m_card.js";
import MovieTopic from "./m_topic.js";
import NewThread from "./m_newthread.js";
import createTopic from "../actions/create_topic.js";
import loadTopics from "../actions/load_topics.js";
import submitRating from "../actions/submit_rating.js";

class MovieDiscuss extends React.Component {
  constructor(props) {
    super(props);

    this.submitTopic = this.submitTopic.bind(this);
    this.currentMovie = this.currentMovie.bind(this);
    this.currentUser = this.currentUser.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(loadTopics());
  }

  currentUser() {
    let user = this.props.userInfo;
    let username = user.username;
    return username;
  } //being worked on

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
    let user = "user";
    // //change when ready to log in
    // let user = this.currentUser();

    this.props.dispatch(createTopic(user, topic, message, id));
  }
  handleRating(rating) {
    let paramId = this.props.match.params.id;
    let currMov = this.currentMovie(paramId);
    let id = currMov.id;
    // let user = this.currentUser();
    let user = "user";
    console.log(rating, id, user);
    this.props.dispatch(submitRating(rating, id, user));
  }

  render() {
    let movieList = this.props.movies;
    let topics = this.props.topics;
    let ratings = this.props.ratingInfo;
    let paramId = this.props.match.params.id;
    let user = this.props.userInfo;
    let currentMovie = this.currentMovie(paramId);

    if (movieList !== null) {
      return (
        <div>
          <MovieDiscussCard
            handleRating={this.handleRating}
            movie={currentMovie}
            ratings={ratings}
            movieId={paramId}
            user={user}
          />
          <h3>Discuss {currentMovie.title}!</h3>
          <NewThread onSubmit={this.submitTopic} />

          <div className="show">
            <MovieTopic movieId={paramId} topics={topics} />
          </div>

        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}
export default connect(container.allState)(MovieDiscuss);
// <div className="show">
//   <DetailedView />
// </div>
