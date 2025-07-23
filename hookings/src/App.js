import React from 'react';
import './App.css';
// import Hookingstate from './Hooking/Hookingstate';
import Hooking from './Hooking/hookingeff';
import JobBoard from './Hooking/Jobs';
import Memo from './Hooking/memo';


function App() {
 
  return (
    <>
    <Hooking/>
    <JobBoard/>
    <Memo/>
    {/* <Hookingstate/> */}
    </>



  )
  

}

export default App;
