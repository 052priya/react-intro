import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div>navbar
        <button onClick={()=>{
            navigate("/");
        }}>home</button>
        <button onClick={()=>{

        }}>about</button>
        <button onClick={()=>{
            navigate("/products")
        }}>products</button>
    </div>
    
  )
}
