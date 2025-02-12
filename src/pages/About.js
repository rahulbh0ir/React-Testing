import { useState } from "react";
import useDocu from "./hook/useDocu";

function About() {
  
  const[count, setCount] = useState(0)  
 
  useDocu(count)

  return(
    <>
    <h1> About Page</h1>
    <button onClick={() => setCount(count + 1)} style={{backgroundColor : "orange"}}>Count - {count}</button>
    </> 

  )
}
export default About;