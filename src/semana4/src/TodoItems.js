import React from "react";

function TodoItems(props){
  return (
    <li>
      <span> 7 </span>
      <p>{props.text}</p>
      <span> X </span>
    </li>
  );
}

export default TodoItems;
