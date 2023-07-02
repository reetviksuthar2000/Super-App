import React from "react";
import style from "../pages/Category/Category.module.css";

const Card = ({ title, img, color, setSelectedCard, selectedCard, setSelectedCardTitle, onSelectCard }) => {
  
    
  const handleClick = () => {
    onSelectCard(title);
    
    
  };


  return (
    <>
      <div className={style.main}>
        <div className={style.cardback}>
          <div
            className={style.card}
            style={{ backgroundColor: color }}
            onClick={handleClick}
          >
            <p className={style.tit}>{title}</p>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;


