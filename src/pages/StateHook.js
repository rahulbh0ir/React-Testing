import React, { useState } from 'react'

const StateHook = () => {
 const[value, setValue] = useState({firstName : "" , lastName : ""}) 

  return (
    <>
      <input 
        type='text' 
        value={value.firstName} 
        onChange={(e) => setValue({...value, firstName: e.target.value})}
      />
      <input 
        type='text'
        value={value.lastName}
        onChange={(e) => setValue({...value, lastName: e.target.value})}
      />

      <h2>{JSON.stringify(value)}</h2>
    </>
  )
}

export default StateHook
