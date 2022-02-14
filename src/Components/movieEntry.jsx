import React, { useState, useEffect } from 'react';


const MovieEntry = (props) => {

  const handleClick = (link) => {
    window.open(`${link}`);
  };

  return (
    <div className="Movie">
      <h1>{props.singleMovie?.Title}</h1>
      <span>Actors: {props.singleMovie?.Actors}</span>
      <p>Release Date: {props.singleMovie?.Released}</p>
      <p>Nominations: {props.singleMovie?.Awards}</p>
      <p>
        <img src={props.singleMovie?.Poster}
          alt="movie poster"
          onClick={() => {handleClick(props.singleMovie?.Poster)}}
          style={{cursor:'pointer'}}>
        </img>
      </p>
    </div>
  )

}

export default MovieEntry;