import React, { useContext } from 'react'
import context from './Context'
import ReducerHook from './ReducerHook'

const Home = () => {

  const name = useContext(context)

  return (
    <>
    <h1>Home</h1>
    <p>Welcome {name}</p>

    <ReducerHook />

    
    </>     
  )
}

export default Home
