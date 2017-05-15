import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import MovieDiscussCard from "./m_card.js";
import MovieTopic from "./m_topic.js";
import NewThread from "./m_newthread.js";
import MovieSideNav from "./m_sidenav.js";
import createTopic from "../actions/create_topic.js";
import loadTopics from "../actions/load_topics.js";
import submitRating from "../actions/submit_rating.js";
import updateThreadVote from "../actions/update_thread_vote.js";

class MovieDiscuss extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
    this.submitTopic = this.submitTopic.bind(this);
    this.currentMovie = this.currentMovie.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleThreadVote = this.handleThreadVote.bind(this);
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
  currentUser() {
    let user = this.props.userInfo;
    let username = user.username;
    return username;
  } //being worked on

  submitTopic(topic, message, rating) {
    let paramId = this.props.match.params.id;
    let currMov = this.currentMovie(paramId);
    let id = currMov.id;
    let user = "user";
    console.log(topic, message, rating);
    // //change when ready to log in
    // let user = this.currentUser();

    this.props.dispatch(createTopic(user, topic, message, id, rating));
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

  handleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    console.log(this.state.isModalOpen);
  }

  handleThreadVote(objectId, voteCount, negVotes, posVotes, totalVotes) {
    this.props.dispatch(
      updateThreadVote(objectId, voteCount, negVotes, posVotes, totalVotes)
    );
  }

  render() {
    let movieList = this.props.movies;
    let topics = this.props.topics;
    let ratings = this.props.ratingInfo;
    let paramId = this.props.match.params.id;
    let user = this.props.userInfo;
    let currentMovie = this.currentMovie(paramId);

    if (movieList !== null) {
      let hideClass = "hide";

      if (this.state.isModalOpen) {
        hideClass = "show";
      }
      return (
        <div>
          <MovieDiscussCard
            handleRating={this.handleRating}
            movie={currentMovie}
            ratings={topics}
            movieId={paramId}
            user={user}
          />
          <div className="row">
            <div className="col s3">
              <MovieSideNav movies={movieList} />
            </div>
            <div className="col s9">
              <h3 className="center">Discuss {currentMovie.title}!</h3>
              <button onClick={this.handleModal} className="btn review-btn">
                Write a Review
              </button>
              <div className={hideClass}>
                <NewThread
                  closeModal={this.handleModal}
                  onSubmit={this.submitTopic}
                  handleRating={this.handleRating}
                  user={user}
                />
              </div>
              <MovieTopic
                handleThreadVote={this.handleThreadVote}
                movieId={paramId}
                topics={topics}
              />
            </div>
          </div>

        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}
export default connect(container.allState)(MovieDiscuss);
