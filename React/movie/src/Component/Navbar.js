import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          background: "darkgrey"
        }}
      >
        <Link to="/"><h1 style={{color:"black",textDecoration: 'inherit'}}>Movie App</h1></Link>
        <Link to="/fav"><h2 style={{marginLeft:"2rem", color:"black", textDecoration: 'inherit'}}>Favourites</h2></Link>
      </div>
    );
  }
}
