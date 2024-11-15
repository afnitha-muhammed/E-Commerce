
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Auth from './pages/Auth'


function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Auth/>} />
    </Routes>
    
      
    </>
  )
}

export default App
