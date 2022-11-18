import React from "react";
import './bootstrap.css';

const Search = ({search, setSearch}) => {
    const getInputValue = (event) => {
      console.log(event.target.value);
      let valor = event.target.value;
      setSearch(valor)
    }
  
    return (
      <section>
        <input type="text" placeholder="Escribe para buscar"  onChange={getInputValue}></input>
      </section>
    )
  }

export default Search