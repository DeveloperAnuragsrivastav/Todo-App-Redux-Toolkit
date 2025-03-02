import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-100 mb-6">My To-Do List</h1>
     <AddTodo/>
     <Todo/>

    </div>
    </div>
  )
}

export default App