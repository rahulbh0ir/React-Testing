import { RouterProvider } from "react-router-dom";
import context from "./pages/Context"

function App({router}) {

  const name = "Ghost"

  return (
    <context.Provider value={name}>
      <RouterProvider router={router}/>
    </context.Provider>
  )
}

export default App;
