import React,{useState} from 'react'
import './Hookingstate.css'

function Hookingstate() {
    const [count, setcount]= useState(4)
    const [theme,settheme]= useState("blue")
    const [themeplus, setthemeplus] =useState("white")
    function Increasement(){
       setcount(prev =>{return prev+1}) 
       setthemeplus("yello")
    }
    function Decreasement(){
        setcount(prev=>prev-1)
        settheme("red")
        setthemeplus("white")
    }
  return (
    <>
     <div>Hookingstate</div>
     <div>
        <button className={theme} onClick={Decreasement}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button className={themeplus} onClick={Increasement}>+</button>
     </div>
    </>
   
  )
}

export default Hookingstate