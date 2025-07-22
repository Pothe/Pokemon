import React, {useState} from 'react';
import './App.css';

function App() {
 const [count, setcount]= useState(4)
 
function Decreasement(){

  setcount(prev=> prev=prev-1)
}
function Increase(){
  setcount(prev =>(prev+1))
}
  return(
    <>
    <div onClick={Decreasement}>-</div>
    <div>{count}</div>
    <div onClick={Increase}>+</div>
    </>
  )
  

}

export default App;
