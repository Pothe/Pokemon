import React, { useState, useMemo, useEffect } from 'react'

export default function Memo() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
 const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  
  const themeStyles = useMemo(()=>{
    return{
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }}, [dark] )

 

  useEffect(() => {
    console.log("theme changed")
  },[themeStyles])

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}
