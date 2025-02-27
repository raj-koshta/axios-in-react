import axios from "axios";

const API = axios.create({
    // case 1
    // baseURL: `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`

    // case 2 
    baseURL: `https://www.omdbapi.com/`,
});

export const getMovies = () =>{

    // case 1
    // return API.get("");

    // case 2 
    return API.get(`?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
}