import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { Products } from './Components/Products'
import { Navbar } from './Components/navbar'
import { ProductsDetails } from './Components/ProductsDetails'
import { NotFound } from './Components/NotFound'

function App() {
  const [count, setCount] = useState(0)


//www.facebook.com/
//www.facebook.com/products
//www.facebook.com/products/2
//params  :id  , :num ,: kj
////www.facebook.com/search?page=1&limit=2 
//query ?page=1 
  return (
    <div className="App">
         <Navbar/> 
     <Routes>
   
       <Route path='/' element={<Home/>} />
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/:id' element={<ProductsDetails/>}/>
       <Route path='*' element={<NotFound/>}/>
     
     </Routes>
    </div>
  )
}

export default App
