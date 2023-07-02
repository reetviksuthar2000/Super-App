import React from "react";
import styledas from "../pages/Dashboardpage/Dashboard.module.css";
import { useState, useEffect } from "react";


function News() {
  const [news, setNews] = useState([]);

  const fetchNewsData = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&pageSize=1&apiKey=2924592980e54679ba2384749c2dfbee";
    let data = await fetch(url);
    let parsedData = await data.json();
    setNews(parsedData.articles);
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  // console.log(news);

  return (
    <>
      
        <div className={styledas.right} >
        {news.map((article,index) => (
          <div className={styledas.news} key={index}>
            <div className={styledas.transbac}>
              <img src={article.urlToImage} alt="" />
              <div className={styledas.light}>
                <p className={styledas.para}>{article.title}</p>
                <p className={styledas.time}>{article.publishedAt}</p>
              </div>
            </div>
            <div className={styledas.description}>
              <p className={styledas.des}>
                {article.description}
              </p>
            </div>
          </div>
           ))}
        </div>
     
    </>
  );
}

export default News;
