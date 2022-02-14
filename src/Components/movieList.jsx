import React, { useState, useEffect } from 'react';
import MovieEntry from './movieEntry.jsx';


const MovieList = (props) => {

  return (
    <MovieEntry singleMovie={props.singleMovie}/>
  )
}

export default MovieList