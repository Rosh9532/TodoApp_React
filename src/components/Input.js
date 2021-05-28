import React, { useEffect, useState } from "react";

import "./styles.css"

//getting item from localStorage
const getItems=()=>{
  const list=localStorage.getItem('lists');
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }else{
    return [];
  }
}
const Input = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState(getItems());
  const handleChange = (event) => {
    const newValue = event.target.value;
    setTodo(newValue);
  };
  //add data to localStorage
 useEffect(()=>{
   localStorage.setItem('lists',JSON.stringify(items))
 },[items])



  const addItem = () => {
    setItems((previtems) => {
      return [...previtems, todo];
    });
    setTodo("");
  };

  const deleteItem=(id)=> {
    console.log(id)
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
 
  

  return (
    <>
      <div>
        <div className="form">
          <input type="text" onChange={handleChange} value={todo} />
          <button onClick={addItem}>
            <span>➕</span>
          </button>
        </div>
      </div>
      <div>
        <ul>
          {items.map((list,index) => {
            return (<div onClick={()=> deleteItem(index)}>
            <li>{list}</li>
            </div>);
          })}
        </ul>
      </div>
    </>
  );
};

export default Input;
