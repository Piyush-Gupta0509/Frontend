import React, { Component } from "react";
// import { movies } from "./getMovie";
import axios from "axios"

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      movies:[],
      currPage: 1
    };
  }

  handleEnter = (id) => {
    this.setState({ hover: id });
  };

  handleLeave = () => {
    this.setState({ hover: "" });
  };

  async componentDidMount(){
    let data=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=1");
    console.log(data.data);
    this.setState({
      movies: [...data.data.results]
    })


  }
  componentDidUpdate() {
    console.log("CDU is called ");
  }
  componentWillUnmount() {
    console.log("CWU is called ");
  }
  
  async getUpdatedMovies() {
    let data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.currPage}`
      );
      
      this.setState({
        movies: [...data.data.results],
      });
  }
  handlePrevPage=()=>{
    if(this.state.currPage>1){
      this.setState({currPage:this.state.currPage-1},this.getUpdatedMovies)
    }
  }

  handleNextPage=()=>{
    this.setState({currPage:this.state.currPage+1},this.getUpdatedMovies)
  }

  render() {
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="trending display-3">Trending</h3>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => {
                return (
                  <div
                    className="card movie-card"
                    onMouseEnter={() => this.handleEnter(movieObj.id)}
                    onMouseLeave={this.handleLeave}
                    key={movieObj.id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      className="card-img-top movie-img"
                      alt="..."
                    />
                    <h5 class="card-title movie-title">
                      {movieObj.original_title}
                    </h5>
                    {/* <p class="card-text movie-text">{movie.overview}</p> */}
                    <div className="button-wrapper">
                      {this.state.hover == movieObj.id && (
                        <a href="#" class="btn btn-info movie-button">
                          Add to Favourites
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <nav aria-label="Page navigation example" className="pagination">
                <ul class="pagination">
                  <li class="page-item" onClick={this.handlePrevPage}>
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      {this.state.currPage}
                    </a>
                  </li>
                  <li class="page-item" onClick={this.handleNextPage}>
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
