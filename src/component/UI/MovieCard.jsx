import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movieDetails }) => {

  const { Poster, Year, imdbID, Title } = movieDetails;

  return (
    <li className="card" style={{width: "18rem", margin: "10px 15px"}}>
      <img src={Poster} className="card-img-top h-75" alt="..." />
        <div className="card-body">
          <h5 className="card-title h-50">{Title} : {Year}</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </li>
  );
}

export default MovieCard
