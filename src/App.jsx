import { Route, Routes } from 'react-router-dom'
import './App.css'
import Fotter from './Components/Fotter'
import Navbar from './Components/navbar'
import Search from './Components/Search'
import About from './Pages/About'
import Cart from './Pages/cart'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Order from './Pages/order'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Register from './Pages/register'
// import NotFound from './Pages/NotFound'
// import OrderList from './Pages/OrderList'
// import Checkout from './Pages/Checkout'
// import Payment from './Pages/Payment'
// import ProductEdit from './Pages/ProductEdit'
// import ProductList from './Pages/ProductList'
// import Profile from './Pages/Profile'
// import Shipping from './Pages/Shipping'
// import UserEdit from './Pages/UserEdit'
// import UserList from './Pages/UserList'

  function App() {


  return (
    <>
     <Navbar />
<Search />
      <Routes>
        <Route path='/' element={<Home />} />
    
      </Routes>
      <Routes>
      <Route path='/about' element={<About/>} />

      </Routes>
      <Routes>
      <Route path='/contact' element={<Contact />} />

      </Routes>
      <Routes>
      <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Routes>
      <Route path='/cart' element={<Cart />} />
      </Routes>
      <Routes>
      <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
      <Routes>
      <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
      <Route path='/register' element={<Register />} />
      </Routes>
      <Routes>
    
      <Route path='/order' element={<Order />} />
      </Routes>
   
      <Routes >
      <Route path='/collection' element={<Collection />} />

      </Routes>
<Fotter />
    </>
  )
}

export default App
