import React from 'react';
import './App.css';
import FunctionContextConponent from './FunctionContextConponent';
import { ThemeProdiver } from './Hooking/ThemeContext';
//  export const ThemeContext = React.createContext();

// import Hookingstate from './Hooking/Hookingstate';
// import Hooking from './Hooking/hookingeff';
// import JobBoard from './Hooking/Jobs';
// import Memo from './Hooking/memo';


function App() {
  // const [darkthem, setdarkthem] = useState(false)
  // function ToggleClick(){
  //   setdarkthem(prev=>!prev)
  //   console.log("clicked")
  // }
 
  return (
    <>
    {/* <Hooking/>
    <JobBoard/>
    <Memo/> */}
    {/* <Hookingstate/> */}
   {/* <ThemeContext.Provider value={darkthem}> */}
   <ThemeProdiver>   
     <FunctionContextConponent/>
    </ThemeProdiver>
    {/* </ThemeContext.Provider> */}
    </>


  )
  

}

export default App;
