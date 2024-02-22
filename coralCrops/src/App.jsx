import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToDos from './components/ToDos'
import Fall from './components/Fall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar/>
        <ToDos>
        <div className="Card">
          <h3>Crop To-Do List</h3>
          <section className='ToDoContainer'>
            <li> List items </li>
          </section>
        </div>
        </ToDos>
      </div>
    </>
  )
}

export default App
