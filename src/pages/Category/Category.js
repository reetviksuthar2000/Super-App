import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Category.module.css";
import Card from "../../components/Card";
import erroricon from "../../Assets/erroricon.png"
import action from "../../Assets/action.png";
import drama from "../../Assets/drama.png";
import romance from "../../Assets/romance.png";
import thriller from "../../Assets/thriller.png";
import western from "../../Assets/western.png";
import horror from "../../Assets/horror.png";
import fantasy from "../../Assets/fantasy.png";
import music from "../../Assets/music.png";
import fiction from "../../Assets/fiction.png";

function Category() {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardTitles, setSelectedCardTitles] = useState([]);

  const [error, setError] = useState(false);

  const cardData = [
    { id: 1, title: "Action",   img: action, color: "#FF5209" },
    { id: 2, title: "Drama",    img: drama, color: "#D7A4FF"},
    { id: 3, title: "Romance",  img: romance, color: "#148A08"},
    { id: 4, title: "Thriller", img: thriller, color: "#84C2FF"},
    { id: 5, title: "Western",  img: western, color: "#902500" },
    { id: 6, title: "Horror",   img: horror, color: "#7358FF"},
    { id: 7, title: "Fantasy",  img: fantasy, color: "#FF4ADE"},
    { id: 8, title: "Music",    img: music, color: "#E61E32"},
    { id: 9, title: "Fiction",  img: fiction, color: "#6CD061"},
  ];

  useEffect(() => {
    const storedSelectedCardTitles = localStorage.getItem('selectedCardTitles');
    if (storedSelectedCardTitles) {
      setSelectedCardTitles(JSON.parse(storedSelectedCardTitles));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCardTitles', JSON.stringify(selectedCardTitles));
  }, [selectedCardTitles]);

  const handleSelectCard = (title) => {
    const isSelected = selectedCardTitles.includes(title);

    if (isSelected) {
      const updatedSelectedCardTitles = selectedCardTitles.filter((selectedTitle) => selectedTitle !== title);
      setSelectedCardTitles(updatedSelectedCardTitles);
    } else {
      setSelectedCardTitles([...selectedCardTitles, title]);
    }
  };

  
  function handlenextpage() {
     if( selectedCardTitles.length < 3){
      setError(true)
     }
     else{
      navigate('/dashboard')
     }
  }

  
  return (
    <>
      <div className={style.contain}>
        <div className={style.top}>
          <div className={style.content}>
            <h2 className={style.head}>Super app</h2>
            <p className={style.ptext}>Choose your entertainment category</p>
          </div>
          <div className={style.choicecategory}>
            {selectedCardTitles.map((value,i)=>{
              return (
              <button className={style.btn1} key={i}>{value} <span>X</span></button>
              )
            })}
            
          </div>
          {error&&selectedCardTitles.length < 3 ? <> <img src={erroricon} alt="" /><p className={style.perror}>Minimum 3 category required</p> </>: ""}
        </div>
        <div className={style.cardcomponent}>
          {cardData.map((product, index) => (
            <Card
              title={product.title}
              img={product.img}
              color={product.color}
              key={product.id}
              selectedCards={selectedCards}
              setSelectedCardTitles={selectedCardTitles}
              setSelectedCard={setSelectedCards}
              onSelectCard={handleSelectCard}
            />
          ))}
        </div>
        
          <button className={style.nextbtn} onClick={handlenextpage}>Next Page</button>
       
      </div>
    </>
  );
}

export default Category;
