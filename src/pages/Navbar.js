import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/a">About</Link>
    <Link to="/b">Blogs</Link>
    </>
  )
}

export default Navbar
