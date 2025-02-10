import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Fetch = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        console.log(res)
        res.json()
        console.log(res) 
      })
      .catch(err => {
        console.log(err)
      })  
  }, [])   

  return (
    <>
    <h3>Fetch</h3>
   
    </>
  )
}

export default Fetch
