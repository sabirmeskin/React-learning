import React, { useState, useRef } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  
  // Create a ref for the input field in TodoInput
  const inputRef = useRef(null);

  // Function to add a todo
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  // Function to delete a todo
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  // Function to handle editing a todo
  function handleEditTodo(index) {
    const valuetoEdit = todos[index];
    setTodoValue(valuetoEdit);
    handleDeleteTodo(index);

    // Focus the input after editing
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="">
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        inputRef={inputRef} // Pass the ref for focusing the input
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
