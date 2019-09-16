import React, { Component } from "react";
import "./movie.css";

class Movie extends Component {
  handleClick = e => {
    let touchedMovie = e.target.id;
    this.props.handlePhoto(touchedMovie);
  };

  render() {
    return (
      <div className="movie_box">
        {this.props.data && (
          <img
            alt=""
            onClick={this.handleClick}
            src={
              "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
              this.props.data.poster_path
            }
          ></img>
        )}
        {this.props.data && <p>{this.props.data.title}</p>}
      </div>
    );
  }
}

export default Movie;
