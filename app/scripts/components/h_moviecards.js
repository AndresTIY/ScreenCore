import React from "react";

const urlPath = "https://image.tmdb.org/t/p/w500/";

class MovieCards extends React.Component {
  render() {
    if (this.props.movies !== null) {
      return (
        <div className="row">
          {this.props.movies.map((data, i) => {
            var movieImage =
              "http://berg-group.com/wp-content/uploads/2014/11/Photo_not_available-4.jpg";
            if (data.poster_path !== null) {
              movieImage = urlPath + data.poster_path;
            }
            return (
              <div key={i} className="col s12 m4 l4">
                <div className="card">
                  <div className="card-image">
                    <img src={movieImage} />
                  </div>
                  <div className="card-content">
                    <p>{data.title}</p>
                    <p>Release Data: {data.release_date}</p>
                    <p>Review Average: {data.vote_average}</p>
                  </div>
                  <div className="card-action">
                    <a href="#">Talk About It</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>nothing</div>;
    }
  }
}
export default MovieCards;

// this.props.movies.results.title
// <div className="row">
//   <div className="col s1 m4 l4">
//     <div className="card">
//       <div className="card-content">
//         <p>
//           I am a very simple card. I am good at containing small bits of information.
//           I am convenient because I require little markup to use effectively.
//         </p>
//       </div>
//       <div className="card-action">
//         <a href="#">This is a link</a>
//       </div>
//     </div>
//   </div>
// </div>
