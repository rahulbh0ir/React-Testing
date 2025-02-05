import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import context from "./pages/Context"

function App({router}) {
  const [user, setUser] = useState("Alucard")

  return (
    <context.Provider value={{user, setUser}}>
      <RouterProvider router={router}/>
    </context.Provider>
  )
}

export default App;
