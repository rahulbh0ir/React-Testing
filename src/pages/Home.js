import React, {useContext } from 'react'
import UserContext from './Context'


    
  
    const Home = () => {
      const user = useContext(UserContext)      
      return (
        <h1>Hello !! {user}</h1>
      )

    }
    export default Home
    