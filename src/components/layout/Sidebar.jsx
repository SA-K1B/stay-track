// 1. Simple Sidebar - src/components/layout/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();
  
  const userRole = 'admin';

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Stay Track</h1>
        <p className="text-sm text-gray-300">{userRole} Portal</p>
      </div>

      <nav className="mt-6">
        {/* Show different links based on role */}
        {userRole === 'admin' && (
          <>
            <Link 
              to="/rooms" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/rooms' ? 'bg-gray-700' : ''}`}
            >
              Room Management
            </Link>
            <Link 
              to="/staff" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/staff' ? 'bg-gray-700' : ''}`}
            >
              Staff Management
            </Link>
            <Link 
              to="/settings" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/settings' ? 'bg-gray-700' : ''}`}
            >
              Settings
            </Link>
          </>
        )}

        {userRole === 'guest' && (
          <>
            <Link 
              to="/dashboard" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/book-room" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/book-room' ? 'bg-gray-700' : ''}`}
            >
              Book Room
            </Link>
            <Link 
              to="/my-bookings" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/my-bookings' ? 'bg-gray-700' : ''}`}
            >
              My Bookings
            </Link>
          </>
        )}

        {userRole === 'staff' && (
          <>
            <Link 
              to="/dashboard" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/tasks" 
              className={`block px-6 py-3 hover:bg-gray-700 ${location.pathname === '/tasks' ? 'bg-gray-700' : ''}`}
            >
              My Tasks
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;