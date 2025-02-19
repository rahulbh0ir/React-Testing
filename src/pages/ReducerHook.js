import React, { useReducer } from 'react'

const ini = 0 ;
const fun = (state, action) => {
    switch(action) {
        case "plus":
           return (state = state + 1) 
        case "minus":
            return (state = state - 1)
        case "reset":
            return (ini)
        default:
            return state
            
        }        
}


const ReducerHook = () => {

  const [count, dispatch] = useReducer(fun, ini)  

  return (
    <>
    <h2>{count}</h2>
    <button onClick={() => dispatch("plus")}>Plus</button> 
    <button onClick={() => dispatch("minus")}>Minus</button> 
    <button onClick={() => dispatch("reset")}>Reset</button> 
    </>
  )
}

export default ReducerHook