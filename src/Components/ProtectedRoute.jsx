import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, token, loading } = useAuth();

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!user || !token) {
    console.log('No user or token found, redirecting to login');
    return <Navigate to={requireAdmin ? "/admin/login" : "/login"} replace />;
  }

  // Check if admin access is required
  if (requireAdmin && user.role !== 'admin') {
    console.log('Admin access required, redirecting to home');
    return <Navigate to="/" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requireAdmin: PropTypes.bool
};

export default ProtectedRoute; 