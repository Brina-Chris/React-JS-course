/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const {backdrop_path, title, name, overview,  original_title, vote_average, id} = movie;
  return (
    <Link to={`/movies/${id}?backdrop_path=${movie.backdrop_path}`} className="Movie-card">
      <div className="img-wrap">
          <img src={`${baseUrl}${backdrop_path}`} alt={name || original_title || title} />
      </div>
      <div className="content">
        <h3>{name || original_title || title}</h3>
        <p>{overview}</p>
        <span className="rating">{vote_average}</span>
      </div>
    </Link>
  )
}

export default MovieCard