import React, { useContext } from 'react'
import context from './Context'
import ReducerFetch from './ReducerFetch'

const Home = () => {

  const name = useContext(context)

  return (
    <>
    <h1>Home</h1>
    <p style={{color: "magenta"}}>Welcome {name.user}</p>

    <ReducerFetch />

    
    </>     
  )
}

export default Home
