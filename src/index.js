import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from "./pages/Navbar";
import { createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';

const router = createBrowserRouter([
  {path: "/", element: <><Navbar /><Home /> </>},
  {path: "/a" , element: <> <Navbar /> <About /> </>},
  {path: "/b" , element: <> <Navbar/> <Blogs /> </>}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <App router = {router} />
    </>
);

