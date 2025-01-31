import { useState } from "react";

function App() {
 
  const [car, setCar] = useState("Honda")
  
  function handle(e) {
    setCar(e.target.value);
    console.log(car)
  }

  return (
    <>
    <h2>Hello</h2>
    </>
  )
}

export default App;
