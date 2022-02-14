import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx'

const App = () => {
  const [movie, setMovie] = useState([])
  const [title, setTitle] = useState('Titanic')

  useEffect (() => {
    axios.get(`https://www.omdbapi.com/?apikey=f30c9863&t=${title}&plot=full`)
    .then(res => res.data)
    .then(res => {
        setMovie(res);
    });
  }, [])

  return (
    <div>
      {console.log(movie)}
      Welcome to Movie App!
      <MovieList singleMovie={movie}/>
    </div>
  )
};

export default App