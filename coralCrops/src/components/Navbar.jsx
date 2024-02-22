import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>Coral Crops</h1>
        <div className='links'>
          <Link to ='/'>
            <div>Home</div>
          </Link>
          <Link to ='/spring'>
            <div>Spring</div>
          </Link>
          <Link to ='/summer'>
            <div>Summer</div>
          </Link>
          <Link to ='/fall'>
            <div>Fall</div>
          </Link>
          <Link to ='/winter'>
            <div>Winter</div>
          </Link>
        </div>
    </nav>
  )
}