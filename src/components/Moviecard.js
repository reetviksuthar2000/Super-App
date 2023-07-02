import React, { useEffect, useState } from "react";
import moviestyle from "../pages/Moviespage/Movies.module.css";

function Moviecard() {
  const [movie, setMovie] = useState([]);

  const fetchMovieData = async () => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/week?api_key=2a4c1d50a6d973ad7e8621f8620ef8ce";
    let data = await fetch(url);
    let parsedData = await data.json();
    setMovie(parsedData.results);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const data = JSON.parse(localStorage.getItem("selectedCardTitles"));
  console.log(data);

  return (
    <>
      <div className={moviestyle.moviecard}>
        <h2>Entertainment according to your choice</h2>
        {data.map((value, index) => {
          return<>
          
            <p key={index}>{value}</p>
            <div className={moviestyle.mapdiv}>
              <div className={moviestyle.firstcategory}>
                {movie.map((item, id) => {
                  return (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt=""
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
          </>;
        })}
        
      </div>
    </>
  );
}

export default Moviecard;
