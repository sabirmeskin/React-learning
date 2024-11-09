import { useState } from "react"

export default function TodoInput(props) {

  const {handleAddTodos} = props
  const [todoValue , setTodoValue] = useState(' ')
  return(
    <div className="font-press flex justify-center">
      <div className="p-4 m-3">    
        <input onChange={(e)=> {
          setTodoValue(e.target.value)
        }}
        className="
          border-green-300 border py-2 px-4 rounded-lg
        " type="text" placeholder="Enter Todo ..." />
        <button onClick={() => {
          handleAddTodos(todoValue)
        }}
        className="ml-2 border p-2 rounded-lg bg-green-300">Add</button>
        </div>
    </div>
  )
};
