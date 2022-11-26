import React from 'react';
import { useState,useEffect,useRef } from 'react';
import {Button, ListItemButton} from '@mui/material';
import { db } from '../fireBase'; 
import {doc, deleteDoc } from 'firebase/firestore';

export default function Todo(props) {
   const text = useRef();
  const [isCompleted,setIsCompleted] = useState(false);

  
  async function deleteTodo() {
    const docref = doc(db,"todos",`${props.id}`);
      await deleteDoc(docref); 
  }
   
  useEffect(() => {
    text.current.style.listStyleType="none";
    text.current.style.textDecoration=isCompleted?"line-through":"none";
    if(isCompleted) setTimeout(()=>{deleteTodo()},1000)
  }, [isCompleted])
  



  return (
    <>
      <ListItemButton component="a" href="#simple-list">
        <input type="checkbox" onChange={(e)=> setIsCompleted(e.target.checked)}/>
        <li ref={text}>{props.value}</li> 
        <Button>{isCompleted?"completed":"pending"}</Button>      
      </ListItemButton>
    </>
  )
}
