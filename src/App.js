import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Nopage from "./pages/Nopage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />      
        <Route path="about" element={<About/>} />      
        <Route path="blogs" element={<Blogs/>} />
        <Route path="*" element={<Nopage />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App;
