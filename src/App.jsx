import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='px-15 py-0 overflow-hidden'>
     <AddTodo/>
     <Todo/>

    </div>
  )
}

export default App