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
  { description: 'Aprender React native', completed: false },
  { description: 'Utilizar Bootstrap como archivo css en React', completed: true },
  { description: 'Aprender a usar Bootstrap con React y NPM', completed: false },
  { description: 'Utilizar FontAwesome como archivo css en React', completed: true },
  { description: 'Aprender a usar FontAwesome con React y NPM', completed: false },
  { description: 'Aprender Angular', completed: false },
  { description: 'Aprender Vue', completed: false },
  { description: 'Tener más imaginación para hacer diseños CSS', completed: false }
]

function App() {
  return (
    <div className="container-fluid col-md-4 col-lg-4 mt-4">
      <div className="card">
        <div className="card-header">
          <TodoCounter/>
          <ProgressBar/>
        </div>
        <div className="card-body">
          <TodoSearch/>
          <TodoList>
            {todos.map((todo)=>(
              <TodoItems key={todo.description} text={todo.description} status={todo.completed} />
            ))}
          </TodoList>
          <CreateTodoButtom/>
        </div>
      </div>
    </div>
  );
}

export default App;