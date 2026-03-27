import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='navbar-brand'>studio.</span>
      <ul className='navbar-links'>
        <NavLink className={({isActive}) => isActive? "active" : ""} to="/home" ><li><h3>home</h3></li></NavLink>
        <NavLink className={({isActive}) => isActive? "active" : ""} to="/about"><li><h3>about</h3></li></NavLink>
        <NavLink className={({isActive}) => isActive? "active" : ""} to="/contact"><li><h3>contact</h3></li></NavLink>
      </ul>
    </nav>
  )
}