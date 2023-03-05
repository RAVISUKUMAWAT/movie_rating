import Movie from "../Movie/Movie";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const showMovie = movie => {
  return <Movie movie={movie} />;
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
        const response = await axios.get('http://localhost:9000/movies');
        setMovies(response.data);
    }
    fetchMovies();
  }, []);

  return <div>{movies.map(showMovie)}</div>;
};

export default MovieList;
