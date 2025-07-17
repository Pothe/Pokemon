import React from 'react'

function Pagination({goTonextPageUri, goToPrevPageUri}) {
  return (
    <div>

      {goToPrevPageUri && <button onClick={goToPrevPageUri}>previous</button> }  
       {goTonextPageUri&&<button onClick={goTonextPageUri}>Next</button>}  
      
    </div>
  )
}

export default Pagination
