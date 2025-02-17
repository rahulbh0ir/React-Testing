import React, { useEffect, useState } from 'react'

const EffectHook = () => {
  
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    document.title = `Counter - ${count}`
  },[count])
  
   return (
    <>
    <input 
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}  
    />
    <button onClick={() => setCount((prev) => prev + 1)}>Count - {count}</button>  
    </>
  )
}

export default EffectHook
