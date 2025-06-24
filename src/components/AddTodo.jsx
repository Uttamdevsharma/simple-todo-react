import { useState } from "react";
export default function AddTodo({onAddTodo}){

    const [title , setTitle] = useState("");
    return (
        <>
         
         <input 
         type="text"
          placeholder="Add task" 
          onChange={(e) => setTitle(e.target.value)}
          />
        
         <button onClick={() => {
            onAddTodo(title);
            setTitle("");
         }}  > Add </button>
        </>

    );
}