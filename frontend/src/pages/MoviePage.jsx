import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const response = axios.get(`http://localhost:3000/api/movies/${id}`);
    response.then((res) => {
      console.log(res.data);
      setMovie(res.data);
      setLoading(false)
    });
  }, []);

  if(loading){
    return <div>
      Loading...
    </div>
  }

  return (
    <div className="flex  justify-center">
      <div className="flex flex-col border border-gray-300 p-5 shadow-xl rounded-lg bg-black text-white max-w-[1200px]">
        <div className="flex justify-center mb-2">
          <div className="text-4xl font-mono font-bold">{movie.title}</div>
        </div>
        <div className="flex justify-center mb-2">
          <img src={movie.image} className="w-72"></img>
        </div>
        <div className="text-lg font-mono">
          {movie.full_description}
        </div>

        
      </div>
    </div>
  );
};
