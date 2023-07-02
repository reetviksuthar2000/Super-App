import React from "react";
import { useState, useEffect } from "react";
import styledas from "../pages/Dashboardpage/Dashboard.module.css";
import cloudimg from "../Assets/cloudimg.png";
import temp from "../Assets/temp.png";
import wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png"


function Whether() {
  const [weather, setWeather] = useState ([]);

  const fetchWeatherData = async () => {
    const url = "https://api.weatherapi.com/v1/current.json?key=4332150cbcb14fd08df92431232606&q=pindwara";
    let data = await fetch(url);
    let parsedData = await data.json();
    setWeather(parsedData.current)
   
  }
  
  useEffect(() => {
    fetchWeatherData()
  }, [])
  
  // console.log(weather);


  return (
    
    <div className={styledas.whether}>
      <div className={styledas.top}>
        {/* <p>{moment().format('LL')}</p> */}
        <p>{weather.last_updated}</p>
      </div>
      <div className={styledas.bottom}>
        <div className={styledas.climate}>
          <img src={cloudimg} alt="" />
          <p>Heavy rain</p>
        </div>
        <hr className={styledas.line1} />
        <div className={styledas.temperature}>
          <p className={styledas.te}>{weather.temp_c}&deg;C</p>
          <div className={styledas.btm}>
            <img src={temp} alt="" />
            <div>
              <p>{weather.pressure_mb}mbar</p>
              <p>Pressure</p>
            </div>
          </div>
        </div>
        <hr className={styledas.line2} />
        <div className={styledas.condition}>
          <div className={styledas.winds}>
            <img src={wind} alt="" />
            <div>
              <p>{weather.wind_kph} km/h</p>
              <p>Wind</p>
            </div>
          </div>
          <div className={styledas.humiditys}>
            <img src={humidity} alt="" />
            <div>
              <p>{weather.humidity}%</p>
              <p>Humidiy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whether;
