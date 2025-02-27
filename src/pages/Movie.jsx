import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import MovieCard from "../component/UI/MovieCard"
import { getMovies } from '../services/GetServices';

const Movie = () => {

    const [data, setData] = useState([]);

    // Case 1 
    // const API = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`;

    const getMoviesData = async () => {
        try{
            // Case 1
            // const res = await axios.get(API)

            // Case 2

            const res = await getMovies();
            setData(res.data.Search);
        }catch(error){
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getMoviesData();
    },[])

  return (
    <div className='container row'>
        <ul style={{display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "80px"}}>
            {
                data.map((curMovie)=>{
                return <MovieCard key={curMovie.imdbID} movieDetails={curMovie} />
                })
            }
        </ul>
    </div>
  )
}

export default Movie
