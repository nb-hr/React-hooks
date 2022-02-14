import React, { useState, useEffect } from 'react';

const MovieEntry = (props) => {

  return (
    <div>
      <h1>{props.singleMovie?.Title}</h1>
      <span>Actors: {props.singleMovie?.Actors}</span>
      <p>Release Date: {props.singleMovie?.Released}</p>
      <p><img src={props.singleMovie?.Poster} alt="movie poster"></img></p>
    </div>
  )

}

export default MovieEntry;