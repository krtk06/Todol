import { useState } from 'react'
import reactLogo from '../src/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Todolist.jsx'
function App() {
  return (
    <div className='font-sans min-h-screen text-center flex items-center'>
      <TodoList/>
    </div>
  )
}

export default App
