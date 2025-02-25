import React, { useEffect, useReducer } from 'react'

const initial = {
  post : {},
  loading : true,
  error : ""
}

const func = (state, action) => {
  switch(action.type) {
    case "passed":
      return {
        post : action.payload,
        loading : false,
        error : ""
      }

    case "failed":
      return {
        post : {},
        loading : false,
        error : "Something went wrong !!!" 
      }
      
    default:
      return state  
  } 
}

const ReducerFetch = () => {
  
  const [value, dispatch] = useReducer(func, initial)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "passed" , payload : data })
      })
      .catch(err => {
        dispatch({ type : "failed"})
      })
  } ,[])

  return (
    <>
      <h2>Fetching use UseReducer</h2>
      {value.loading ? "Fetching data please wait....." : <p>Title : {value.post.title}</p>}
      {value.error ? value.error : null}
    </>
  )
}

export default ReducerFetch
