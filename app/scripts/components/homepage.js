import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import MovieCards from "./h_moviecards.js";
import FeaturedMovie from "./h_featured.js";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FeaturedMovie movie={this.props.movies} />
        <MovieCards movies={this.props.movies} />
      </div>
    );
  }
}

export default connect(container.allState)(HomePage);
