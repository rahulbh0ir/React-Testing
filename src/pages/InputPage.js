import React from 'react'
import useInput from './hook/useInput'

const InputPage = () => {
  
  const [first, bindFirst, resetFirst] = useInput("")
  const [last, bindLast, resetLast] = useInput("")

  const func = (e) => {
    e.preventDefault()
    alert(`Hello!! ${first} ${last}`)
    resetFirst()
    resetLast()
  }

  return (
    <>
      <input {...bindFirst} />
      <input {...bindLast} />
      <button onClick={func}>Submit</button>
    </>
  )
}

export default InputPage
