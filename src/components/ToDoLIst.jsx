
import Todo from "./ToDo";

export default function ToDoList({todos,onChangeTodo,onDeleteTodo}){
    return (
        <>
        <ul>
             {todos.map((todo) => (

                    <li key={todo.id}>
                        < Todo 
                        todo={todo} 
                        onChange={onChangeTodo}
                         onDelete={onDeleteTodo}
                          />
                    </li>

                ))}
                
                  
        </ul>

        </>

    );
}