import React from "react";
import { AppUI } from "./AppUI";
const defaultTodos = [
  { text: 'Cortar cebolla',completed: true },
  { text: 'Tomar el curso de intro',completed: false },
  { text: 'Llorar',completed: false },
  { text: 'Probando',completed: false }  
]
 function App() {
  //-----------Para filtrar los todos
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  //revisando cual de 'todo.completed' es true
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let serchedTodos = [];
  if (!searchValue.length > 0) {
    serchedTodos = todos;
  }else{
    serchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
    
  }
  //-------Para completar todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    //inyectando todos los todos que ya teniamos
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  //-------Para borrar todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    //inyectando todos los todos que ya teniamos
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          serchedTodos={serchedTodos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
    />
  );
}

export default App;
