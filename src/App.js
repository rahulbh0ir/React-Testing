import { useState } from "react";

function App() {
 
  const [car, setCar] = useState("Honda")
  
  function handle(e) {
    setCar(e.target.value);
    console.log(car)
  }

  return (
    <>
    <form>

    <select value={car} onChange={handle}>
      <option value="Maruti">Maruti</option>
      <option value="Suzuki">Suzuki</option>
      <option value="Honda">Honda</option>
      <option value="Kia">Kia</option>
    </select>

    </form>
    </>
  )
}

export default App;
