// Simple Header - src/components/layout/Header.jsx
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebase';

const Header = () => {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false)
  
  const handleLogout = async () => {
        setLoading(true)
        try {
            await signOut(auth)
            console.log("User logged out")
        } catch (error) {
            console.log("Error:", error)
        } finally {
            setLoading(false)
        }
    }
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">Welcome!</h2>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">{user?.email}</span>
        <button
          onClick={handleLogout}
          disabled={loading}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          {loading ? 'Logging out...' : 'Log Out'}

        </button>
      </div>
    </header>
  );
};

export default Header;