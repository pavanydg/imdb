import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMovies } from "../hooks/movies";
import { MovieCard } from "../components/MovieCard";
export const HomePage = () => {
  const [loading,setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = axios.get(`http://localhost:3000/api/movies`, {});
    response.then((res) => {
      console.log(res.data);
      setMovies(res.data);
      setLoading(false)
    });
  }, []);

  if(loading){
    return <div>
      Loading....
    </div>
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie._id} className="m-2">
          <MovieCard
            title={movie.title}
            short_description={movie.short_description}
            rating={movie.rating}
            image={movie.image}
            id={movie._id}
          />
        </div>
      ))}
    </div>
  );
};
