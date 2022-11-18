import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import "./bootstrap.css";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState('');

  // nueva variable de la busqueda
  let todosFiltrados = [];

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    const execute = async () => {
    const response = await fetch("https://api.thedogapi.com/v1/breeds/");
    const json = await response.json();
    
    setData(json);
    setIsLoading(false); 
  };  
  execute();  
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (!search.length >= 1){
    todosFiltrados = data;
  }
  else {
    todosFiltrados = data.filter(element => {
      const todoText = element.name.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <div className="App">
      <div className="container-fluid col-10">
        <h1>Mi Buscador de Perritos</h1>
        <Search className="mt-4 form-control" search={search} setSearch={setSearch} />
            <div className="row mt-3">
                {todosFiltrados.map((i) => (
                    <div key={i.id} className="col-md-2">                    
                        <div className="card">
                            <img className="card-img-top img-fluid" src={i.image.url} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{i.name}</h4>
                                <p className="card-text">{i.temperament}</p>
                            </div>
                        </div>
                        <br />                   
                    </div> 
                ))}
            </div>        
      </div>
    </div>
  );
}