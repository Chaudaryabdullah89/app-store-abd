import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiUsers, FiSettings, FiLogOut, FiFileText } from 'react-icons/fi';
import { useAuth } from '../Context/AuthContext';
import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/admin/dashboard', icon: FiHome, label: 'Dashboard' },
    { path: '/admin/products', icon: FiShoppingBag, label: 'Products' },
    { path: '/admin/blogs', icon: FiFileText, label: 'Blogs' },
    { path: '/admin/customers', icon: FiUsers, label: 'Users' },
    { path: '/admin/settings', icon: FiSettings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            ))}
            <Link
              to="/admin/settings"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/admin/settings'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FiSettings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <button
              onClick={logout}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiLogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64">
          {children}
        </main>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminLayout; 