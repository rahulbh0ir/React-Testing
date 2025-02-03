import { RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';

function App() {
  const router = createBrowserRouter([
      {path: "/", element: <><Navbar/> <Home /> </> },
      {path: "/about", element :<> <Navbar/> <About /> </>},
      {path: "/blogs", element: <><Navbar/> <Blogs /> </> }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
