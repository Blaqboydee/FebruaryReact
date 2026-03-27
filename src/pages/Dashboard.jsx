import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "../Dashboard.css"


const Sidebar = () => {
  return (
  <div className="sidebar">
    <NavLink to="/dashboard/profile" className="navlink-item">Profile</NavLink>
    <NavLink to="/dashboard/products" className="navlink-item">Products</NavLink >
    <NavLink to="/dashboard/activity" className="navlink-item">Activity</NavLink >
    <NavLink to="/dashboard/trend" className="navlink-item">Trend</NavLink >
    <NavLink to="/dashboard/education" className="navlink-item">Education</NavLink>
  </div>)
}

const Dashboard = () => {
  return (
    <div className="layout">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard