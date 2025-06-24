
import { useState } from "react";
import initialTodos from "../data/initialTodos";

import Todo from "./ToDo";

export default function ToDoList(){

    const [todos,setTodos] =useState(initialTodos);

    const handlechange = (todo) => {

        const changesTodos = todos.map(t => {
            if(t.id === todo.id){
                return{
                    ...t,
                    title: todo.title,
                    done:todo.done
                }; 
            }
            return t;
        });

      setTodos(changesTodos);

    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleAdd = (title) => {
        setTodos([
            ...todos,
            {
                id: getNextTodoId(todos),
                title,
                done: false,
            },
        ]);
    }



    return (

        <ul>

                {todos.map((todo) => (

                    <li key={todo.id}>
                        < Todo todo={todo} 
                        onChange={handlechange}
                         onDelete={handleDelete} />
                    </li>

                ))}
                
                  
        </ul>

    );
}