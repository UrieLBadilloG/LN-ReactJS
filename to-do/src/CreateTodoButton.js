import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
const onClickButton = (msg) => {
  alert(msg);
}

  return (
    <button 
    className="CreateTodoButton"
    //onClick={() => console.log('Hubo un click')}
    onClick={() => onClickButton('Crear una nueva tarea')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };