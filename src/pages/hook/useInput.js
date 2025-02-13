import { useState } from 'react'

const useInput = (initial) => {
  const [value, setValue] = useState(initial);

  const bind = {
    value : value,
    onChange : (e) => setValue(e.target.value)
  }

  const reset = () => setValue(initial)

  return [value, bind, reset]

}



export default useInput
