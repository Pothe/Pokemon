import {useEffect} from 'react';
import axios from 'axios';

export default function useBookSearch({ query, pageNumber }) { 
  useEffect(() => {        
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
    console.log(res.data)
})
// to check error
.catch(error => {
      if (axios.isCancel(error)) {
      
        console.log('Request canceled:', error.message);
      } else {
        console.error(error);
      }
    });

    return ()=> Cancel()
//   return () => {
//     if (Cancel) Cancel('Cleanup: request canceled');
//   };
 

  },[query, pageNumber]);

  return null
}
