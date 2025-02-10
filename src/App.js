import { useReducer, useState } from "react";
import { RouterProvider } from "react-router-dom";
import context from "./pages/Context"

const ini = 0
const func = (state, action) => {
  switch(action) {
    
    case "plus":
      return state + 1
  
    case "minus":
      return state - 1 

    case "reset":
      return ini

    default:
      return state

  }
}

function App({router}) {
  const [count, dispatch] = useReducer(func, ini)

  return (
    <context.Provider value={{count, dispatch}}>
      <RouterProvider router={router}/>
    </context.Provider>
  )
}

export default App;
