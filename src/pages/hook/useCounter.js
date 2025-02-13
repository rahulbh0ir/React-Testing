import {useState} from 'react'

const useCounter = (initial = 0, value = 1) => {
   const [count, setCount] = useState(initial)

   const increment = () => {
     setCount(prev => prev + value) 
   }

   const decrement = () => {
     setCount(prev => prev - value)     
   }

   const reset = () => {
     setCount(initial) 
   }

    return [count, increment, decrement, reset]
}
export default useCounter
