import React, { useState } from 'react'
import EffectHook from './EffectHook'
import EffectClass from './EffectClass'
const Home = () => {

  const [r, setR] = useState(false)

  const fun = (e) => {
    setR(!r)
    const title = e.target.textContent === "Show" ? "Hide" : "Show"
    e.target.textContent = title
  } 

  return (
    <>
    <h1>Home Page</h1>
    <button onClick={fun} style={{backgroundColor : "lightgreen", width: "60px"}}>Show</button>
    {r && <EffectHook />
    }
    </>     
  )
}

export default Home
