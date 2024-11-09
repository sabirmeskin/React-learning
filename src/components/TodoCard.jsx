import React from 'react'

export default function TodoCard(props) {
  const {children,handleDeleteTodo,index,handleEditTodo} = props;
  return (
    <li className='flex flex-row w-full rounded-md bg-white shadow-md my-4 py-2 px-4  '>
      <div className='mx-2 font-semibold capitalize'>{children}</div>
      <div className='space-x-3 ml-auto'>
        <button onClick={()=> {
          handleEditTodo(index)
        }}>
        <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
        </button>
        <button onClick={()=> {
          handleDeleteTodo(index)
          
        }}>
          <i className="fa-solid fa-trash cursor-pointer"></i>
        </button>
      </div>
    </li>
  )
}

