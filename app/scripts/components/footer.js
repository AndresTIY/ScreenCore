import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer blue-grey darken-4">
        <div className="container">
          <div className="row">
            <p className="center grey-text text-lighten-4">
              Made using
              {" "}
              <a href="https://www.themoviedb.org/documentation/api?language=en">
                Movie Database API
              </a>
            </p>

          </div>
        </div>
        <div className="center footer-copyright">
          <div className="container">
            © 2017 Copyright Andres
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
