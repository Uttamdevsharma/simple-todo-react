import { useState } from "react";
import ToDoList from "./ToDoLIst";

export default function Todo({todo,onChange,onDelete}){

    const [isEditing,setIsEditing] = useState(false);


    const todoContent = isEditing ? (
        <>
        <input type="text" value={todo.title} onChange={(e) => onChange({
            id: todo.id,
            title: e.target.value,
            done : todo.done,
        })
        }
        />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    ) : (
        <>
        {todo.title}
          <button onClick={()=> setIsEditing(true)}>Edit</button>
        </>
    )

    return (

        <>
        <input type="checkbox" checked = {todo.done} onChange={(e) => onChange({
            id: todo.id,
            title: todo.title,
            done: e.target.checked,
        })
     }/>
          {todoContent}
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
        

    );
}