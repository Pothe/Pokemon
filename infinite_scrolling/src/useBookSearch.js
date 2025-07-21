import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useBookSearch({query, pageNumber}) {
    useEffect(()=>{
        axios({
            method:"GET",
            url:"",
            params:{q: query, page: pageNumber}
        })
    },[query, pageNumber])
  return
}


http://openlibrary.org/search.json