import React,{useState ,useEffect} from 'react'

function Hookingeff() {
  const [resouretype, setresourcetype]= useState("users")
  const [iterm ,setiterm ] = useState([])
  const [datasource,setdatasource] = useState(true)

 useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${resouretype}`)
  .then(respone=>respone.json())
  .then(json=>setiterm(json))
 },[resouretype])



  return (
    <div>
        <button onClick={()=>setresourcetype("users")}>users</button> 
     <button onClick={()=>setresourcetype("posts")}>Post</button> 
   
     <button onClick={()=>setresourcetype("comments")}>Comment</button>
     <h1>{resouretype}</h1>
     {iterm.map(iterm => {
      return(
       <div key={iterm.id}>
        <div> {iterm.name} </div>
       </div>
        
      ) 
     }
     
     )}
      
     
    </div>
  )
}

export default Hookingeff