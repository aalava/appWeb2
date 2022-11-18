import React, {useState} from "react";
import './App.css';
//import Tareas from "./Tareas"
import ProgressBar from "./ProgressBar";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import CreateTodoButtom from "./CreateTodoButtom";
//import './bootstrap.css';
import './font-awesome.min.css';

const todos = [
  { id: 1, description: 'Aprender React native', completed: false },
  { id: 2, description: 'Utilizar Bootstrap como archivo css en React', completed: true },
  { id: 3, description: 'Aprender a usar Bootstrap con React y NPM', completed: false },
  { id: 4, description: 'Utilizar FontAwesome como archivo css en React', completed: true },
  { id: 5, description: 'Aprender a usar FontAwesome con React y NPM', completed: false },
  { id: 6, description: 'Aprender Angular', completed: false },
  { id: 7, description: 'Aprender Vue', completed: false },
  { id: 8, description: 'Tener más imaginación para hacer diseños CSS', completed: false }
]

function App() {
  const [search, setSearch] = useState('');
  const totalTodo = todos.length;
  const totalCompletedTodo = todos.filter(todo => !!todo.completed).length

  // nueva variable de la busqueda
  let todosFiltrados = [];

  if (!search.length >= 1){
    todosFiltrados = todos;
  }
  else {
    todosFiltrados = todos.filter(todo => {
      const todoText = todo.description.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    }
    )
  }

  const deleteTodo = (description) => {
    const todoIndex = todos.findIndex(todo => todo.description === description);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setSearch(newTodos);
  };

  return (
    <div className="container-fluid col-md-4 col-lg-4 mt-4">
      <div className="card">
        <div className="card-header">
          <TodoCounter total={totalTodo} completed={totalCompletedTodo} />
          <ProgressBar/>
        </div>
        <div className="card-body">
          <TodoSearch search={search} setSearch ={setSearch} />
          <TodoList>
            {todosFiltrados.map((todo)=>(
              <TodoItems key={todo.id} text={todo.description} status={todo.completed} deleteTodo={deleteTodo} />
            ))}
          </TodoList>
          <CreateTodoButtom/>
        </div>
      </div>
    </div>
  );
}

export default App;