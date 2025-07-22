import React, {useState} from 'react';
import './App.css';

function App() {
//  const [count, setcount]= useState(4)
const [state, setstate] = useState({count:4, theme:"blue"})
const count = state.count
const theme= state.theme
 
function Decreasement(){
  setstate(prev=>{
    return{...prev,count: prev.count-1}
  })
  // setcount(prev=> prev=prev-1)
}
function Increase(){
  // setcount(prev =>(prev+1))
}
  return(
    <>
    <div onClick={Decreasement}>-</div>
    <div><span>{count}</span><span>{theme}</span></div>
    <div onClick={Increase}>+</div>
    </>
  )
  

}

export default App;
