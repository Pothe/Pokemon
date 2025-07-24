import React,{useContext} from 'react'
import { ThemeContext } from './App'

function FunctionContextConponent() {
 
  const darkThem = useContext(ThemeContext)
   const themeStyles ={
    backgroundColor : darkThem? "" : '#333',
    color: darkThem? '#333': '#ccc',
    padding: '2rem',
    margin: '2rem',
    width:'100%',
  }
  return (
    <div style={themeStyles}>FunctionContextConponent</div>
  )
}

export default FunctionContextConponent