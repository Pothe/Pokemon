import React from 'react';
import './App.css';
import FunctionContextConponent from './FunctionContextConponent';
import { ThemeProdiver } from './Hooking/ThemeContext';
import { CanvasDrawing } from './Ref';
import { PreviousValueTracker } from './Ref';

import Ref from './Ref';
// export const ThemeContext = React.createContext()
// import Hookingstate from './Hooking/Hookingstate';
// import Hooking from './Hooking/hookingeff';
// import JobBoard from './Hooking/Jobs';
// import Memo from './Hooking/memo';

function App() {
  // const [darkthem, setdarkthem] = useState('')

  // function ToggleClick(){
  //   setdarkthem(prev=>!prev)
  // }
 
  return (
    <>
    {/* <Hooking/> 
    <JobBoard/>
    <Memo/> */}
    {/* <Hookingstate/> */}

   
    <ThemeProdiver>   
     <FunctionContextConponent/>
    </ThemeProdiver>

     <hr/>
     <CanvasDrawing/>
     <PreviousValueTracker/>
     <Ref/> 
    
    </>



  )
  

}

export default App;
