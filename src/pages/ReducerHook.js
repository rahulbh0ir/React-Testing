import React, { useContext } from 'react'
import context from './Context'

const ReducerHook = () => {
  const red = useContext(context)  
  return (
    <>
    <h2>{red.count}</h2>
    <button onClick={() => red.func("plus")}>Plus</button>  
    <button onClick={() => red.func("minus")}>Minus</button>  
    <button onClick={() => red.func("reset")}>Reset</button>  
    </>
  )
}

export default ReducerHook
