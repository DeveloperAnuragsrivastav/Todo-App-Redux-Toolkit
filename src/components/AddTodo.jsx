import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
   <>
     <form onSubmit={addTodoHandler} className="flex mb-6">
          <input
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Add a new task"
            className="w-3/4 p-3 bg-gray-700 text-white border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button  className="w-1/4 p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add
          </button>
        </form>
   </>
  )
}

export default AddTodo