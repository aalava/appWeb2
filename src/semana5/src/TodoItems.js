import React from "react";
import './TodoItems.css';
//import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
/*
const MySwal = withReactContent(Swal)

const myAlert = (props) => {
  MySwal.fire({
    title: "Estás seguro de querer eliminar?",
    text: props.text,
    icon: "warning",
    showCancelButton: !0,
    confirmButtonColor: "#28bb4b",
    cancelButtonColor: "#f34e4e",
    confirmButtonText: "Sí, eliminarlo!"
  }).then(function (e) {
    //deleteTodo(props.id);
    e.value && Swal.fire("Eliminado!", "Tu registro ha sido eliminado.", "success")
  })
}
*/
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
      <span><i className="fa fa-regular fa-trash link-danger" onClick={ props.OnDelete } ></i></span>
    </li>
  );
}

export default TodoItems;