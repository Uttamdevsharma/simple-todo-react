import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo'
import ToDoList from './components/ToDoLIst'
import initialTodos from './data/initialTodos';
import getNextTodoId from './utils/getNextTodoId';


function App() {

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
    <>
      <h1>Simple Todo Application</h1>
      <AddTodo onAddTodo={handleAdd}/>
       <ToDoList todos={todos} onChangeTodo ={handlechange} onDeleteTodo={handleDelete}/>

    </>
  )
}

export default App
