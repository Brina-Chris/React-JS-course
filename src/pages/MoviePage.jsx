import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const MoviePage = () => {
  const {movieId} = useParams();
  const location = useLocation();
   // Extract backdrop_path from query parameters
   const queryParams = new URLSearchParams(location.search);
   const backdropPath = queryParams.get("backdrop_path");

  const api_key = "a3ec5cef31325905723a0ad860da9c7e";
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getMovieInfo = async() => {
    setIsloading(true);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US&append_to_response=credits,images,videos`);
      const data = await response.json();
      // console.log(data);
      setMovie(data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }      
  }

  useEffect(() => {
    console.log({movie})
  }, [movie]);

  useEffect(() => {
    getMovieInfo();
  }, [])

  return (
    <div>
      {isLoading ? (
        <h1>Loading .....</h1>
      ) : (
        <div>
          {backdropPath ? (
            <img src={`${baseUrl}${backdropPath}`} alt="Movie backdrop" className="hero-image"/>
          ) : (
            <p>No image available</p>
          )}
          <div className="casts">
            {
              movie?.credits?.cast?.map((cast) => {
                return (
                  <div key={cast.id}>
                    {
                      cast.profile_path && (
                        <div className="cast-card">
                        <img src={`${baseUrl}${cast.profile_path}`} alt={cast.name} />
                        <h3>{cast.name}</h3>
                        </div>
                      )
                    }                    
                  </div>
                )
              })
            }
          </div>
          <h1>movie - {movieId}</h1>
        </div>
      )}
    </div>
  );
  
}

export default MoviePage