//import './App.css';
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import CreateTodoButtom from "./CreateTodoButtom";

const todos = [
  {description: 'Aprender React native', completed: false},
  {description: 'Aprender Angular', completed: false},
  {description: 'Aprender Vue', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map((todo)=>(
          <TodoItems key={todo.description} text={todo.description} />
        ))}
      </TodoList>
      <CreateTodoButtom/>
    </>
  );
}

export default App;
