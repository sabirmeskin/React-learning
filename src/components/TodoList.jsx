import TodoCard from "./TodoCard"

export default function TodoList() {

  let todos = [
    'go to the gym',
    'get milk from store',
    'pick up kids from school'
  ]

  return (
 <div className=" ">
     <ul className=" px-4 w-full " >
      {todos.map((todo , todoIndex ) => {
        return (
          <TodoCard key={todoIndex}> 
              <span>{todo}</span>
          </TodoCard>
        )
      })}
    </ul>
 </div>
  )
}
