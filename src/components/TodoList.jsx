import TodoCard from "./TodoCard"

export default function TodoList(props) {

  const {todos} = props;

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
