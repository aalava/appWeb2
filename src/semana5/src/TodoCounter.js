import React from "react";
import './TodoCounter.css';

const TodoCounter = ({total, completed}) => <h2 className="TodoCounter">Hola Manuel Alejandro!,<br/>tienes {completed} tareas completadas de {total}</h2>;

export default TodoCounter;
