import React from 'react'
import { NavLink } from 'react-router-dom'
export default () => {
  return (
    <div className="header">
      <NavLink to='/' className="logo">URL Monitoring</NavLink>
      <div className="header-right">
        <NavLink to='/all'>All Urls</NavLink>
      </div>
    </div>
  )
}
