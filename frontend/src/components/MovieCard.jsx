import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const MovieCard = ({ title, short_description, image, rating, id }) => {

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 border border-gray-300 p-5 shadow-xl rounded-lg bg-black text-white max-w-[1200px]">
        <div>
          <div className="text-2xl font-mono font-semibold mb-2 ml-14">
            {title}
          </div>
          <img src={image} className="h-96"></img>
          <div className="ml-24">⭐ {rating}</div>
        </div>
        <div className="flex flex-col justify-center p-5 col-span-2 font-mono text-lg">
          <div className="text-center">{short_description}</div>
          <div className="flex justify-center">
            <Link
              className="bg-yellow-500 p-1 rounded-md text-black mt-3 hover:cursor-pointer"
              to={`/movies/${id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
