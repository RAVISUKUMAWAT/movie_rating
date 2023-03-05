import "./Movie.css";

const Movie = ({ movie: { title, image, rating } }) => {
  return (
    <div className="Movie">
      <div className="Card">
        <h2>{title}</h2>
        <img src={image} alt={title}></img>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Movie;
