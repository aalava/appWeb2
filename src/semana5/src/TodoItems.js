import React from "react";
import './TodoItems.css';
//import Tareas from "./Tareas";

function icono(props){
  if (props.status===true){
    return (
      <i className="fa fa-regular fa-check-circle link-primary"/>
    )
  }
  else {
    return (
      <i className="fa fa-times-circle link-warning"/>
    )
  }
}

function ondelete(props){
  alert('Está seguro que desea borrar la tarea: \n' + props.text);
}

function TodoItems(props){
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{icono(props)}</span>
      <p className="text-secondary">{props.text}</p>
      <span><i className="fa fa-regular fa-trash link-danger" onClick={() => { ondelete(props) } }></i></span>
    </li>
  );
}

export default TodoItems;
