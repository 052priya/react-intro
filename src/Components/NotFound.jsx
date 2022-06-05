import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate=useNavigate();
  return (
    <div>NotFound
        
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-10.png" alt="404 error" width="100%"/>

    </div>
  )
}
