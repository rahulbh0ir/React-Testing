import React, { useEffect, useState } from 'react'

const EffectHook = () => {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter - ${count}`
  },[count])
  
   return (
    <>
    <button onClick={() => setCount((prev) => prev + 1)}>Count - {count}</button>  
    </>
  )
}

export default EffectHook
