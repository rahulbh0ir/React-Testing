import React, { useState } from 'react'
import useDocu from './hook/useDocu'

const Fetch = () => {

  const[count, setCount] = useState(0)
  
  useDocu(count)

  return (
    <>
    <button onClick={() => setCount(count + 1) } style={{backgroundColor : "lightblue"}}> Count - {count}</button>
    </>
  )
}

export default Fetch
