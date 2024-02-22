import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ToDos from './components/ToDos'
import Fall from './components/Fall'
import Spring from './components/Spring'
import Summer from './components/Summer'
import Winter from './components/Winter'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ToDos/>}/>
          <Route path='/fall' element={Fall}/>
          <Route path='/spring' element={Spring}/>
          <Route path='/summer' element={Summer}/>
          <Route path='/winter'element={Winter}/>
        </Routes>
        {/* <ToDos></ToDos> */}
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
