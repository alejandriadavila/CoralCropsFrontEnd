import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <div className='Header'>
          <h1>Coral Crops</h1>
        </div>
        <nav className='Navbar'>Navbar</nav>
        <div className="Card">
          <h3>Crop To-Do List</h3>
          <section className='ToDoContainer'>
            <li> List items </li>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
