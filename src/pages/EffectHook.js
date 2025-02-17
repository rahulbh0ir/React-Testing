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

    return () => {
      window.removeEventListener("mousemove", func)  
    }

  }, [])

  return (
    <>
    <h3>X - {x}</h3> 
    <h3>Y - {y}</h3> 
    <p>--Watch console--</p>
    </>
  )
}

export default EffectHook
