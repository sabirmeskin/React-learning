import TodoCard from "./TodoCard"

export default function TodoList(props) {

  const {todos} = props;

  return (
 <div className=" ">
     <ul className=" px-4 mx-9" >
      {todos.map((todo , todoIndex ) => {
        return (
          <TodoCard index = {todoIndex} {...props} key={todoIndex}> 
              <span>{todo}</span>
          </TodoCard>
        )
      })}
    </ul>
 </div>
  )
}
