import React from "react";
import Movie from "./Movie";

const harryPotterFirst = {
  title: "Harry Potter and the Sorcers stone",
  image:
    "https://m.media-amazon.com/images/I/51HSkTKlauL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  rating: 5
};

const sherlockHolmes = {
  title: "Sherlock Holmes - the pink case",
  image: "https://m.media-amazon.com/images/I/51ZqLGyqiGL._SY346_.jpg",
  rating: 4.5
};

const ironman = {
  title: "Iron man vs Batman",
  image:
    "https://m.media-amazon.com/images/I/51uVGofXjIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  rating: 4
};

const spiderman = {
  title: "Spider man in the multiverse",
  image:
    "https://m.media-amazon.com/images/I/51qWmQzgecL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  rating: 5
};

const movies = [harryPotterFirst, sherlockHolmes, ironman, spiderman];

const showMovie = movie => {
  return <Movie movie={movie} />;
};

const MovieList = () => {
  return <div>{movies.map(showMovie)}</div>;
};

export default MovieList;
