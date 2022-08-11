import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
     }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }
    return(
        <form onSubmit={onSubmit }>
            <label>Escribe un nuevo To-Do   </label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe el texto"
            />
            <div className="TodoForm-buttonContainer">
                <button type="button"
                 onClick={onCancel}
                 className="TodoForm-button TodoForm-button--cancel"
                 >Cancelar</button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm}