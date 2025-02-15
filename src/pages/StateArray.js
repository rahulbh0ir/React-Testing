import React, { useState } from 'react'

const StateArray = () => {
  const [arr, setArr] = useState([])
  
  const func = () => {
    setArr([...arr, {
        id: arr.length,
        value: Math.floor(Math.random() * 10)
    }])
  }  

  return (
    <>
    <button onClick={func}>Add</button> 
    {arr.map((item) => (
        <p key={item.id}>{item.value}</p>
    ))} 
    </>
  )
}

export default StateArray
