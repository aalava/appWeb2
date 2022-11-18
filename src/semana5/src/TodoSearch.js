import React from "react";
import './TodoSearch.css'

const TodoSearch = ({search, setSearch}) => {
  const getInputValue = (event) => {
    console.log(event.target.value);
    let valor = event.target.value;
    setSearch(valor)
  }

  return (
    <section>
      <input type="text" placeholder="Escribe para buscar" className="form-text float-end" onChange={getInputValue}></input>
    </section>
  )
}

export default TodoSearch;