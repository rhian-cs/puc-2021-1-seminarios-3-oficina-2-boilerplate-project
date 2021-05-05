import React, { useState } from 'react'

const Input = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      {/* {
        inputValue ? <h1>Verdadeiro</h1> : <h1>Falso</h1>
      } */}
    </>
  )
}

export default Input
