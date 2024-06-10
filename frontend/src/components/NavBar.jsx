import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to={"/homepage"} className="self-center text-xl bg-yellow-500 p-1 rounded-sm font-bold cursor-pointer">
            IMDb
          </Link>
        </a>
        <div className="text-white text-lg">Sign in</div>
      </div>
    </nav>
  );
};
