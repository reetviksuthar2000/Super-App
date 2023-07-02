import React from "react";
import styledas from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile";
import Whether from "../../components/Whether";
import News from "../../components/News";
import Notes from "../../components/Notes";
import Timer from "../../components/Timer";

function Dashboard() {
  return (
    <>
      <div className={styledas.dashboard}>
        <div className={styledas.left}>
          <div className={styledas.topcomp}>
            <div className={styledas.leftcomp}>
              <Profile/>
              <Whether />
            </div>
            <div className={styledas.rightcomp}>
              <Notes />
            </div>
          </div>
          <div className={styledas.bottomcomp}>
            <Timer />
          </div>
        </div>
        <div className={styledas.rightside}>
          <News />
          <Link to="/movies"><button>Browse</button></Link>
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
