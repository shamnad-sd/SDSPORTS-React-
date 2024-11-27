import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
