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
  const {laoding,books,hasmore,error}=useBookSearch({query, pageNumber} );


  return (
    <>
    <input type='text' value={query} onChange={Handlesearch} />
    {books.map(book=>{
      return <div key={book}>{book}</div>
    })}
    {laoding && <div>laoding.........</div>}
    {error && <div>error ......</div>}
     
    </>
  )
}

export default App;
