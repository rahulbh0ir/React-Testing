import React from 'react'

const Blogs = () => {
  const myfunc = (e) => {
    const newcolor = e.target.style.backgroundColor === "lightpink" ? "lightgreen" : "lightpink"
    const newText = e.target.textContent === "OFF" ? "ON" : "OFF"
    e.target.style.backgroundColor = newcolor
    e.target.textContent = newText
  }

  return (
    <>
      <h1>Blog page</h1>
      <button onClick={myfunc} style={{ backgroundColor: "lightpink", width: "50px" }}>OFF</button>
      <p>Click to toggle</p>
    </>
  )

}
export default Blogs
