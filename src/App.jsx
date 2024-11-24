import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Fotter from './Components/Fotter';
import Navbar from './Components/navbar';
import Search from './Components/Search';
import About from './Pages/About';
import Cart from './Pages/cart';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Order from './Pages/order';
import PlaceOrder from './Pages/PlaceOrder';
import Product from './Pages/Product';
import Register from './Pages/register';
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
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Home - E-commerce App',
      '/about': 'About Us - E-commerce App',
      '/contact': 'Contact Us - E-commerce App',
      '/product/:productid': 'Product Details - E-commerce App',
      '/cart': 'Your Cart - E-commerce App',
      '/placeorder': 'Place Order - E-commerce App',
      '/login': 'Login - E-commerce App',
      '/register': 'Register - E-commerce App',
      '/order': 'Your Orders - E-commerce App',
      '/collection': 'Collection - E-commerce App',
    };

    const title = pageTitles[location.pathname] || 'E-commerce App';
    document.title = title;
  }, [location]);

  return (
    <>
    <ToastContainer />
      <Navbar />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productid' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/order' element={<Order />} />
        <Route path='/collection' element={<Collection />} />
      </Routes>
      <Fotter />
    </>
  )
}

export default App
