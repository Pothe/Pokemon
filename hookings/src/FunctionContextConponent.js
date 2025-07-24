// import React ,{useContext}from 'react'
import React from 'react'
import { useTheme, useThemeupdate } from './Hooking/ThemeContext'
// import {ThemeContext} from './App'
function FunctionContextConponent() {
//  const darkTheme = useContext(ThemeContext) 
   const darkTheme = useTheme()
   const ToggleClick = useThemeupdate()
   
   const themeStyle ={
    backgroundColor : darkTheme? "#000000ff" : '#ffffffff',
    color: darkTheme? '#ffffffff': '#000000',
    padding: '2rem',
    margin: '2rem',
    width:'100%',
  }
  return (
    <>
   
    <button onClick={ToggleClick} >Toogle</button>
    <div style={themeStyle} >FunctionContextConponent</div>
     </>
  )
}

export default FunctionContextConponent