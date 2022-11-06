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

let i = 0;

todos.forEach(todo => {
  if (todo.completed===false){
    i++;
  }
  return i;
});