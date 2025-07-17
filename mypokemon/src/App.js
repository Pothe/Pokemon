import React, { useState, useEffect} from 'react';
import Pokemonlis from './Pokemonlis';
import Pagination from './Pagination';
import axios from 'axios'
function App() {

  const [pokemon, setPokem] = useState([])
  const [currentPage, setCurrentPage]= useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setNextPage] = useState()
  const [prevPage, setprevPage] = useState()
  const [loading, setloading]=useState(true)


useEffect(()=>{
  setloading(true);
  let Cancel
  axios.get(currentPage,{
    cancelToken: new axios.CancelToken(c => Cancel = c)
  }).then(res =>{ 
  setloading(false)
  setNextPage(res.data.next)
  setprevPage(res.data.previous)
  setPokem(res.data.results)
})



.catch(error => {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.error(error);
      }
    });

  return () => {
    if (Cancel) Cancel('Cleanup: request canceled');
  };
},[currentPage])
console.log(nextPage)
function goToNextPageUrl(){
  setCurrentPage(nextPage)
}
function goToPrevPageUrl(){
  setCurrentPage(prevPage)
}

 if(loading) return(<div>loadding...</div>)
  return (
    <>
     <Pokemonlis data={pokemon}/>
    <Pagination 
    goTonextPageUri ={nextPage? goToNextPageUrl:null}
    goToPrevPageUri ={prevPage? goToPrevPageUrl:null}
    
    />
    </>
 
  
  );
}
export default App;
