import {useState} from 'react';
import UseBookSearch from './useBookSearch';
import './App.css';

function App() {
  const [Query, setQuery]=useState('')
    const [pageNumber, setPageNumber] =useState('')
   UseBookSearch(Query,pageNumber)
  return  
}

export default App;
