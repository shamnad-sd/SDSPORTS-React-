import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import Category from './components/Category/Category'
import SearchProductDetail from './components/SearchProductDetail'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path="/product/:id" element={<SearchProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category' element={<Category />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
