import React from 'react'
import {Link} from "react-router-dom";
import moviestyle from "../Moviespage/Movies.module.css"
import usericon from "../../Assets/usericon.png"
import Moviecard from '../../components/Moviecard'
function Movies() {
  return (
    <>
    <div className={moviestyle.movies}>
        <div className={moviestyle.top}>
            <h1>Super app</h1>
            <Link to="/category">
            <button>Dashboard</button>
            </Link>
            <img src={usericon} alt="" />
        </div>
        <div className={moviestyle.bottom}>
            <Moviecard/>
        </div>
    </div>
    </>
  )
}

export default Movies