import React from "react";

const urlPath = "https://image.tmdb.org/t/p/w500/";

class MovieCards extends React.Component {
  render() {
    if (this.props.movies !== null) {
      return (
        <div className="row">
          {this.props.movies.map((data, i) => {
            return (
              <div key={i} className="col s1 m4 l4">
                <div className="card">
                  <div className="card-image">
                    <img src={urlPath + data.poster_path} />
                  </div>
                  <div className="card-content">
                    <p>
                      {data.title}
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
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
