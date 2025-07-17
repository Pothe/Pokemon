import React, { useState, useEffect} from 'react';
import Pokemonlis from './Pokemonlis';
import axios from 'axios'
function App() {

  const [pokemon, setPokem] = useState([])

  useEffect(()=>{
 axios.get("https://pokeapi.co/api/v2/pokemon").then(res =>(
    setPokem(res.data.results)
  ))
},[])
 
  return (
  <Pokemonlis data={pokemon}/>
  );
}
export default App;
