import React, { useState, useEffect} from 'react';
import Pokemonlis from './Pokemonlis';
import axios from 'axios'
function App() {

  const [pokemon, setPokem] = useState([])
  const [currentPage, setCurrentPage]= useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setNextPage] = useState()
  const [prevPage, setprevPage] = useState()
  const [loading, setloading]=useState(true)


useEffect(()=>{
  setloading(true);
  axios.get(currentPage).then(res =>{ 
  setloading(false)
  setNextPage(res.data.next)
  setprevPage(res.data.previous)
  setPokem(res.data.results)
})
},[currentPage])

 if(loading) return(<div>loadding...</div>)
  return (
  <Pokemonlis data={pokemon}/>
  );
}
export default App;
