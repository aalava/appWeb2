import React from "react";
import './TodoItems.css';

function icono(props){
  if (props.status===true){
    return (
      <i className="fa fa-regular fa-check-circle link-primary" onClick={() => props.OnCompleted()}/>
    )
  }
  else {
    return (
      <i className="fa fa-times-circle link-warning" onClick={() => props.OnCompleted()}/>
    )
  }
}

function TodoItems(props){
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{icono(props)}</span>
      <p className="text-secondary">{props.text}</p>

      <span><i className="fa fa-regular fa-trash link-danger" onClick={() => props.OnDelete()} ></i></span>
    </li>
  );
}

export default TodoItems;