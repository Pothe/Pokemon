import React, {useState, useEffect, useRef} from 'react'

function Ref() {

    const [name, setname] = useState('')
    const inputRef = useRef(1)

    useEffect(()=>{
        inputRef.current = inputRef.current +=1 
    })
    
  return (

    <div>

        <input type='text' value={name} onChange={e=>setname(e.target.value)}/>
        <div>My name is {name} and number {inputRef.current}</div>
       

    </div>
  )
}
export function CanvasDrawing() {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 150, 100);
  }, []);

  return <canvas ref={canvasRef} width={300} height={150} />;
}

export function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <p>Now: {count}</p>
      <p>Before: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default Ref

// import { useRef, useEffect } from "react";

