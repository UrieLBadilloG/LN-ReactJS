import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI(
    
{       
        loading, 
        error, 
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        serchedTodos,
        completeTodo,
        deleteTodo
    }
    
) {
    return (
        <React.Fragment>
            {<TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />}


            {<TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />}


            {<TodoList>
                {error && <p>Desesperate, hubo un error....</p>}

                {loading && <p>Loading, no desesperes...</p>}

                {(!loading && !serchedTodos.length) && <p>CREA TU PRIMER TO-DO</p>}

                {serchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}

                    />
                ))}
            </TodoList>}
            {<CreateTodoButton />}

        </React.Fragment>
    );
}

export { AppUI };