import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductsDetails = () => {
    const [data,setData]=useState({})

    //get params with useParams
    const {id}=useParams();
    useEffect(()=>{
        //fetching data from server
        axios.get( `http://localhost:3004/products/${id}`).then((res)=>{
      
        //setting data with useState
            setData(res.data)
            
        }).catch((error)=>{console.log(error)})
    },[])

  return (
    <div>ProductsDetails of {id}
     <h1>Name:{data.name}</h1>
    <p>Price:{data.price}</p> 
    
    </div>
  )
}
