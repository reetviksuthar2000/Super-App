import React from "react";
import styledas from "../pages/Dashboardpage/Dashboard.module.css";

function Profile() {

  const data = JSON.parse(localStorage.getItem('selectedCardTitles'))
  console.log(data)

  
  return (
    <>
      <div className={styledas.profile}>
        <div className={styledas.userd}>
          <p className={styledas.name}>{localStorage.getItem("name")}</p>
          <p className={styledas.email}>{localStorage.getItem("email")}</p>
          <h1 className={styledas.userid}>{localStorage.getItem("username")}</h1>
        </div>
        
        <div className={styledas.btns}>
          
           {data.map((item,index) =>{
             return <button className={styledas.catbtn} key={index}>{item}</button>
           
           })}
            
          
        
        </div>
        
      </div>
    </>
  );
}

export default Profile;
