import React from "react";

export default function TodoInput(props) {

  const { handleAddTodos, todoValue, setTodoValue, inputRef } =props

  return (
    <div className="font-press flex justify-center">
      <div className="p-4 m-3">
        <input
          ref={inputRef} // Use the inputRef passed from the parent component
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className="border-green-300 border py-2 px-4 rounded-lg"
          type="text"
          placeholder="Enter Todo ..."
        />
        <button
          onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue(""); // Clear the input after adding a todo
          }}
          className="ml-2 border p-2 rounded-lg bg-green-300"
        >
          Add
        </button>
      </div>
    </div>
  );
}
