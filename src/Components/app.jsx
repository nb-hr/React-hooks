import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const App = () => {
  const [product, setProduct] = useState([])

  useEffect (() => {
    axios.get(`https://www.omdbapi.com/?apikey=f30c9863&t=Captain America&plot=full`
    )
    .then(res => res.data)
    .then(res => {
        setProduct(res);
    });
  }, [])

  return (
    <div>
      {console.log(product)}
      Welcome to Movie App!
    </div>
  )
};

export default App