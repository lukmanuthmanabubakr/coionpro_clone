import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarSec'>
        <div>
            <NavLink to="/" className='brandName'>coinprofile</NavLink>
        </div>
        <div>
            <NavLink to="/login" className="getStateds">
                Get Started
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar