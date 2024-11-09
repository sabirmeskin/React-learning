import { useState } from "react";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {


  const [todos, setTodos] = useState([
    'go to the gym',
    'get milk from store',
    'pick up kids from school'
    
  ]);
  
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <div className="">
      <TodoInput handleAddTodos={handleAddTodos} />
    
      <TodoList todos={todos}/>

    </div>
  );
}

export default App
