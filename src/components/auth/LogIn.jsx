// LogIn.jsx - Simple Tailwind Styled Sign In Form
import { useState } from "react";
import auth from '../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    
    const handleLogIn = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            console.log("User Logged In Successfully")
            console.log("Id:", result.user.uid, "\nEmail: ", result.user.email)
            navigate("/")
        } catch(error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    const toSignUp = () => {
        navigate("/signup")
    }
    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Sign in to your Stay Track account
                </p>
                
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 text-base"
                />
                
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 text-base"
                />
                
                <button 
                    onClick={handleLogIn}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white p-3 rounded font-medium hover:bg-blue-700 disabled:bg-blue-300"
                >
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
                
                <p className="text-center text-gray-600 my-4">
                    Don't have an account?
                </p>
                
                <button 
                    onClick={toSignUp}
                    className="w-full bg-gray-600 text-white p-3 rounded font-medium hover:bg-gray-700"
                >
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default LogIn;