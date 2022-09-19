import React, { Component } from "react";
import { movies } from "./getMovie";
export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    return (
        <div className="card" >
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body banner-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">
              {movie.overview}
            </p>
            {/* <a href="#" class="btn btn-primary">
              Add To Favourite
            </a> */}
          </div>
        </div>
      
    );
  }
}
