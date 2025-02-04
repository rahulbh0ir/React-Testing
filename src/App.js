import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import UserContext from "./pages/Context";

function App({router}) {
  const [user, setUser] = useState("Alucard")

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App;
