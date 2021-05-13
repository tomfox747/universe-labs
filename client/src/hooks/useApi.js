import React,{useState, useEffect} from 'react'
import axios from 'axios'

const useApi = () =>{
    const get = (url,query,callback) =>{
        axios.get(url,{
            params: {
              query: query
            }
        })
        .then((res) =>{
            callback(res.data)
        }).catch(e =>{
            return e
        })
    }
    
    return{
        get
    }
}

export default useApi