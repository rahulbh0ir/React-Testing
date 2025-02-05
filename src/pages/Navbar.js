import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <Link to="/" style={{padding:"10px"}}>Home</Link>
    <Link to="/a" style={{padding:"10px"}}>About</Link>
    <Link to="/b" style={{padding:"10px"}}>Blogs</Link>
    </nav>
  )
}

export default Navbar
