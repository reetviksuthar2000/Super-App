import React, { useEffect, useState } from 'react'
import styledas from "../pages/Dashboardpage/Dashboard.module.css"

function Notes() {
  const [note, setNote] = useState('');

  useEffect(() =>{
    const storeNote = localStorage.getItem('note');
    if(storeNote){
      setNote(storeNote);
    }
  },[]);

  const handlechange = (e) => {
     const newNote = e.target.value;
     setNote(newNote);
     localStorage.setItem('note' , newNote)
  }

  return (
    <div className={styledas.notes}>
      <h1>All notes</h1>
        
        <textarea name="" id="" value={note} onChange={handlechange} ></textarea>
    </div>
  )
}

export default Notes