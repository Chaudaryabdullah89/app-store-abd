import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Search = lazy(() => import('./components/Search'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

// Lazy load pages
const Home = lazy(() => import('./Pages/Home'));
const Products = lazy(() => import('./Pages/Products'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const Cart = lazy(() => import('./Pages/Cart'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Login = lazy(() => import('./Pages/Login'));
const Register = lazy(() => import('./Pages/Register'));
const Profile = lazy(() => import('./Pages/Profile'));
const Orders = lazy(() => import('./Pages/Orders'));
const AdminDashboard = lazy(() => import('./Pages/admin/AdminDashboard'));
const AdminOrders = lazy(() => import('./Pages/admin/AdminOrders'));
const AdminProducts = lazy(() => import('./Pages/admin/AdminProducts'));
const AdminSettings = lazy(() => import('./Pages/admin/AdminSettings'));
const NotFound = lazy(() => import('./Pages/NotFound'));

// Pages
import About from './Pages/About';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Order from './Pages/Order';
import PlaceOrder from './Pages/PlaceOrder';
import Product from './Pages/Product';
import OrderConfirmation from './Pages/OrderConfirmation';
import AdminLogin from './Pages/admin/AdminLogin';
import AddProduct from './Pages/admin/AddProduct';
import EditProduct from './Pages/admin/EditProduct';
import RequestReset from './Pages/RequestReset';
import ResetPassword from './Pages/ResetPassword';
import AuthSuccess from './Pages/admin/AuthSuccess';
import BlogList from './Pages/BlogList';
import BlogDetail from './Pages/BlogDetail';
import WriteBlog from './Pages/WriteBlog';

// Admin Pages
import AdminCustomers from './Pages/admin/AdminCustomers';
import AdminBlogs from './Pages/admin/AdminBlogs';
import AddBlog from './Pages/admin/AddBlog';

// Context & Providers
import ShopContextProvider from './Context/shopcontext';
import { AuthProvider } from './Context/AuthContext';

// Third Party
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Load the Stripe public key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  const location = useLocation();

  React.useEffect(() => {
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
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <AuthProvider>
            <ShopContextProvider>
              <Elements stripe={stripePromise} options={{ locale: 'auto' }}>
                <LoadingSpinner />
                <div className='max-w-[1280px] mx-auto'>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Navbar />
                  </Suspense>
                </div>
                <Search />
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/product/:productid' element={<ProductDetails />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/placeorder' element={<PlaceOrder />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/collection' element={<Collection />} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
                    <Route path="/admin/orders" element={<ProtectedRoute requireAdmin><AdminOrders /></ProtectedRoute>} />
                    <Route path="/admin/products" element={<ProtectedRoute requireAdmin><AdminProducts /></ProtectedRoute>} />
                    <Route path="/admin/add-product" element={<ProtectedRoute requireAdmin><AddProduct /></ProtectedRoute>} />
                    <Route path="/admin/edit-product/:id" element={<ProtectedRoute requireAdmin><EditProduct /></ProtectedRoute>} />
                    <Route path="/admin/customers" element={<ProtectedRoute requireAdmin><AdminCustomers /></ProtectedRoute>} />
                    <Route path="/admin/settings" element={<ProtectedRoute requireAdmin><AdminSettings /></ProtectedRoute>} />
                    <Route path="/admin/blogs" element={<ProtectedRoute requireAdmin><AdminBlogs /></ProtectedRoute>} />
                    <Route path="/admin/add-blog" element={<ProtectedRoute requireAdmin><AddBlog /></ProtectedRoute>} />
                    <Route path="/admin/edit-blog/:id" element={<ProtectedRoute requireAdmin><AddBlog /></ProtectedRoute>} />
                    <Route path="/product" element={<Product />}>
                      <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/orders' element={<Orders />} />
                    <Route path="/order/:orderId" element={<OrderConfirmation />} />
                    <Route path="/request-reset" element={<RequestReset />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                    <Route path="/auth-success" element={<AuthSuccess />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                    <Route path="/write-blog" element={<WriteBlog />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
                
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
              </Elements>
            </ShopContextProvider>
          </AuthProvider>
        </GoogleOAuthProvider>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
