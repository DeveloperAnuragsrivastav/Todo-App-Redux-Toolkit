import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
   
    <ul className="space-y-4">
          {todos.map(todo=>
          <li key={todo.id}  className="flex justify-between items-center p-3 bg-gray-700 rounded-lg shadow-sm">
            <span className="text-gray-300">{todo.text}</span>
            <button 
            onClick={()=>dispatch(removeTodo(todo.id))}
            className="text-red-500 hover:text-red-700 focus:outline-none">
              Delete
            </button>
          </li>
          )}
        
        </ul>
    </>
  )
}

export default Todos