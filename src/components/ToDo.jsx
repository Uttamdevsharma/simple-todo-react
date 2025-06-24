import { useState } from "react";
import ToDoList from "./ToDoLIst";

export default function Todo({todo,onChange,onDelete}){

    const [isEditing,setIsEditing] = useState(false);


    const todoContent = isEditing ? (
        <>
        <input type="text" value={todo.title} onChange={onChange}/>
          <button>Save</button>
        </>
    ) : (
        <>
        {todo.title}
          <button onClick={()=> setIsEditing(true)}>Edit</button>
        </>
    )

    return (

        <>
        <input type="checkbox" checked = {todo.done}/>
          {todoContent}
          <button>Delete</button>
        </>
        

    );
}