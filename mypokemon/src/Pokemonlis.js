import React from 'react'
function Pokemonlis({ data}) {    
  return (
    <div>
   {data.map(p =>(
    <div key={p.name}>{p.name}</div>
   ))}
    </div>
  )
}

export default Pokemonlis