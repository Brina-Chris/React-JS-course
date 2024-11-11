import { useEffect, useState } from "react";
import MovieCard from "../components/moviecard/MovieCard";


const Moviespage = () => {
    const api_key = "a3ec5cef31325905723a0ad860da9c7e";
    // const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    const requests = {
        fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
        fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_network=213`,
        fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
        fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
        fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
        fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
        fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
        fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`
    };
    
    const getTrendingMovies = async() => {
      setIsloading(true);
      try {
        const response = await fetch(requests.fetchTrending);
        const data = await response.json();
        // console.log(data);
        setTrendingMovies(data.results);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }      
    }

    // useEffect(() => {
    //   console.log({trendingMovies})
    // }, [trendingMovies]);

    useEffect(() => {
      getTrendingMovies();
    }, [])

  return (
    <div>
      {
        isLoading ? (
          <h1>Loading.....</h1>
        ) : (
          trendingMovies.length > 0 ?(
          <section className="trending-movies">
            <h1>Trending Movies</h1>
            <div className="movies_container">
              {
                trendingMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  // <div key={id} className="Movie-card">
                  //   <div className="img-wrap">
                  //     <img src={`${baseUrl}${backdrop_path}`} alt={name || original_title || title} />
                  //   </div>
                  //   <div className="content">
                  //     <h3>{name || original_title || title}</h3>
                  //     <p>{overview}</p>
                  //     <span className="rating">{vote_average}</span>
                  //   </div>
                  // </div>
                ))}
            </div>
          </section>): (
          <h1>
            Oops!!, you have no movies
          </h1>
        )
        )
      }
      
    </div>
  )
}

export default Moviespage