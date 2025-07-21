import React, {useState} from 'react';
import useBookSearch from './useBookSearch';
import './App.css';

function App() {
  const [query, setQuery]= useState('')
    const [pageNumber, setPageNumber] =useState(1)   

   function Handlesearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
   }
  useBookSearch({query, pageNumber} );


  return (
    <>
    <input type='text' value={query} onChange={Handlesearch} />
    <div>title</div>
     <div>title</div>
      <div>title</div>
       <div>title</div>
        <div>loading.....</div>
    </>
  )
}

export default App;
