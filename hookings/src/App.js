import React, { useState } from 'react';
import './App.css';
import FunctionContextConponent from './FunctionContextConponent';
export const ThemeContext = React.createContext()
// import Hookingstate from './Hooking/Hookingstate';
// import Hooking from './Hooking/hookingeff';
// import JobBoard from './Hooking/Jobs';
// import Memo from './Hooking/memo';


function App() {
  const [darkthem, setdarkthem] = useState('')
  function ToggleClick(){
    setdarkthem(prev=>!prev)
  }
 
  return (
    <>
    {/* <Hooking/>
    <JobBoard/>
    <Memo/> */}
    {/* <Hookingstate/> */}
    <ThemeContext.Provider value={darkthem}>
      <button onClick={ToggleClick} >Toogle</button>
     <FunctionContextConponent/>
    </ThemeContext.Provider>
    </>



  )
  

}

export default App;
