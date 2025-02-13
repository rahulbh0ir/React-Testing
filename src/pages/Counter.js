import React from 'react'
import useCounter from './hook/useCounter'

const Counter = () => {
  
  const [count, plus, minus, reset] = useCounter(5,2)

  return (
    <>
      <h1>Counter 1</h1>
      <h3>{count}</h3>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter
