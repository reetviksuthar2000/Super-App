import React from "react";
import { useState, useEffect } from "react";

import styledas from "../pages/Dashboardpage/Dashboard.module.css";
import animationimg from "../Assets/animation.png";
function Timer() {
   
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false); 
  const [autoClose, setAutoClose] = useState(false);
  
  const handleStart = () => {
     setIsActive(true);
          
     
  }
  
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(interval);
              if (autoClose) {
                setAutoClose(true)
                
              }
              return;
            }
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
          }
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (!isActive && (hours !== 0 || minutes !== 0 || seconds !== 0)) {
      clearInterval(interval);
      
    }

    return () => clearInterval(interval);
  }, [isActive, hours, minutes, seconds,autoClose]);
 

  return (
    <div className={styledas.timers}>
      <div className={styledas.anim}>
        <img src={animationimg} alt="" />
      </div>
      <div className={styledas.stopwatch}>
        <div className={styledas.watch}>
          <div className={styledas.hours}>
            <p>Hours</p>
            <button className={styledas.increasebtn} onClick={() => setHours((prevHours) => prevHours + 1)}></button>
            <span>{hours}</span>
            <button className={styledas.decreasebtn} onClick={() => setHours((prevHours) => prevHours - 1)}></button>
          </div>
          <div className={styledas.minute}>
            <p>Minutes</p>
            <button className={styledas.increasebtn} onClick={() => setMinutes((prevMinutes) => prevMinutes + 1)}></button>
            <span>{minutes}</span>
            <button className={styledas.decreasebtn} onClick={() => setMinutes((prevMinutes) => prevMinutes - 1)}></button>
          </div>
          <div className={styledas.second}>
            <p>Seconds</p>
            <button className={styledas.increasebtn} onClick={() => setSeconds((prevSeconds) => prevSeconds + 1)}></button>
            <span>{seconds}</span>
            <button className={styledas.decreasebtn} onClick={() => setSeconds((prevSeconds) => prevSeconds - 1)}></button>
          </div>
        </div>
        <div className={styledas.startbtn}>
          <button onClick={handleStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
