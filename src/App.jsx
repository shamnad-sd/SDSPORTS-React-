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
import ProductDetail from './components/ProductDetails'
import ProductDetails from './components/ProductDetails'
import TextMarquee from './components/TextMarquee'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path="/product/search/:id" element={<SearchProductDetail />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category' element={<Category />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
