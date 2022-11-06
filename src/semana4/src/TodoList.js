import React from "react";
import './TodoList.css';

function TodoList(props){
  return(
    <section className="mt-5">
      <ul className="list-group list-group-light">
        {props.children}
      </ul>
    </section>
  );
}

export default TodoList;
