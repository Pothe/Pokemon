import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useBookSearch({ query, pageNumber }) { 

    const [laoding, setloading] = useState(true)
    const [ error ,seterror] = useState(false)
    const [books, setbooks] = useState([])
    const [hasmore, sethasmore] = useState(false)
  useEffect(() => {    
    setloading(true)  
    seterror(false) 
  
//     axios.get("http://openlibrary.org/search.json", {
//     params: { q: query, page: pageNumber }  })
//      .then(res => {
//     console.log(res.data);
//   })   
let Cancel
axios({
    method:"GET",
    url:"http://openlibrary.org/search.json",
    params:{q: query, page:pageNumber},
    // clear previous data 
    cancelToken: new axios.CancelToken(c=> Cancel =c)
})

// promise data
.then(res=>{
    setbooks(prevBooks =>{
      return [...new Set([...prevBooks,...res.data.docs.map(b=>b.title,)])]
    })
  sethasmore(res.data.docs.length>0)
  setloading(false)

})
// to check error
.catch(error => {
      if (axios.isCancel(error)) {    
        return seterror(true)  
        // console.log('Request canceled:', error.message);
      } else {
        console.error(error);
      }
    });

    return ()=> Cancel()
//   return () => {
//     if (Cancel) Cancel('Cleanup: request canceled');
//   };
 

  },[query, pageNumber]);

  return {laoding,books, hasmore,error}
}
