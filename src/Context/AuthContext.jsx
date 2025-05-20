import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...');
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        console.log('Stored auth data:', { 
          hasToken: !!storedToken, 
          hasUser: !!storedUser 
        });
        
        if (storedToken && storedUser) {
          // Set the token in axios headers
          api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          console.log('Token set in axios headers');
          
          // Verify token and get fresh user data
          console.log('Verifying token...');
          const response = await api.get('/users/me');
          console.log('User verification response:', response.data);
          
          if (response.data) {
            setUser(response.data);
            setToken(storedToken);
            console.log('Auth initialized successfully');
          } else {
            console.log('Invalid token, clearing auth data');
            // If token is invalid, clear everything
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            setToken(null);
          }
        } else {
          console.log('No stored auth data found');
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (userData) => {
    try {
      setError(null);
      
      // Store token and user data
      if (userData.token) {
        localStorage.setItem('token', userData.token);
        setToken(userData.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
      }
      
      // Store user data
      const userToStore = { ...userData };
      delete userToStore.token; // Remove token from user data
      localStorage.setItem('user', JSON.stringify(userToStore));
      setUser(userToStore);
      
      toast.success('Login successful!');
      
      // Redirect based on user role
      if (userToStore.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
      
      return userToStore;
    } catch (err) {
      console.error('Login error:', err);
      setError(err);
      
      if (err.response) {
        toast.error(err.response.data.message || 'Login failed. Please check your credentials.');
      } else if (err.request) {
        toast.error('No response from server. Please check your connection.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
      
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete api.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const value = {
    user,
    token,
    loading,
    error,
    login,
    logout,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext; 