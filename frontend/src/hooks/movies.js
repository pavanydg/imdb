import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useMovies = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        const response = axios.get(`http://localhost:3000/api/movies`,{})
        console.log(response);
    })
    return (
        movies
    )
}
