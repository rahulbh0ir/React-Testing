import React, { useEffect, useState } from 'react'

const EffectHook = () => {
  
  const [post, setPost] = useState([]);
  const [num, setNum] = useState(1);
  const [btn, setBtn] = useState(1);
  
  const fun = () => {
    setBtn(num)
  }
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${btn}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [btn])

  return (
    <>
    <h2>Data Fetching</h2>
    
    <input 
      type='number' 
      value={num}
      onChange={(e) => setNum(e.target.value)}  
      />
    
    <button onClick={fun}>Fetch</button>
    
    <h3 key={post.id}>Title : {post.title}</h3>  

    </>
  )
}

export default EffectHook
