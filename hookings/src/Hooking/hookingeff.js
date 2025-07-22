import React,{useState ,useEffect} from 'react'

function Hookingeff() {
  const [resouretype, setresourcetype]= useState("posts")
  const [iterm ,setiterm ] = useState([])

 useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${resouretype}`)
  .then(respone=>respone.json())
  .then(json=>setiterm(json))
 },[resouretype])


  return (
    <div>
     <button onClick={()=>setresourcetype("posts")}>Post</button> 
     <button onClick={()=>setresourcetype("users")}>users</button> 
     <button onClick={()=>setresourcetype("comments")}>Comment</button>
     <div>{resouretype}</div>
     {iterm.map(iterm => {
      return(
       <div key={iterm.id}>
        <div key={iterm.id}> {iterm.name} </div>
       </div>
        
      ) 
     }
     
     )}
      
     
    </div>
  )
}

export default Hookingeff