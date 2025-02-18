import React, { useEffect, useState } from 'react'

const EffectHook = () => {
  const [count, setCount] = useState(0)
  
  const tick = () => {
    setCount(prev => prev + 1)
  }

  // useEffect( () => {
  //   const interval = setInterval(tick, 1000) 
  
  //   return () => {
  //     clearInterval(interval)
  //   }

  // }, [] )
  

  return (
    <>
    <h1>Effect Hook</h1>
    <h2>{count}</h2>
    </>
  )
}

export default EffectHook
