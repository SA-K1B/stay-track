// Home.jsx - Simple Tailwind Styled Home with Logout
import { useState } from "react";
import { signOut } from "firebase/auth";
import auth from '../config/firebase';

const Home = () => {
    const [loading, setLoading] = useState(false)
    
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Header */}
            <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Stay Track</h1>
            </div>
            
            {/* Dashboard */}
            <div className="bg-white p-8 rounded-lg shadow text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Hotel Management Dashboard
                </h2>
                <p className="text-gray-600 text-lg">
                    Welcome to your hotel management system
                </p>

            </div>
        </div>
    )
}

export default Home;