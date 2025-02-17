import React, { useEffect, useState } from 'react'

const EffectHook = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
 
  const func = (e) => {
    console.log("Function")
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log("Effect")
    window.addEventListener("mousemove", func)
  }, [])

  return (
    <>
    <p>X - {x}</p> 
    <p>Y - {y}</p> 
    </>
  )
}

export default EffectHook
