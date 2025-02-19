import { RouterProvider } from "react-router-dom";
import context from "./pages/Context"
import { useReducer } from "react";

const inital = 0
const func = (state, action) => {
  switch(action) {
    case "plus":
      return (state + 1)
    case "minus":
      return(state - 1)
    case "reset":
      return inital
    default:
      return state
  }
}


function App({router}) {
  const [count, dispatch] = useReducer(func, inital)
  const name = "Ghost"

  return (
    <context.Provider value={{user : name, count : count, func : dispatch}}>
      <RouterProvider router={router}/>
    </context.Provider>
  )
}

export default App;
