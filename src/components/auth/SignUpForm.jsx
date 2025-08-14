// SignUpForm.jsx - Simple Tailwind Styled Sign Up Form
import { useState } from "react";
import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    
    const handleSignUp = async () => {
        setLoading(true)
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            console.log("User Created Successfully")
        } catch(error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    const toLogIn = () => {
        navigate("/")
    }
    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Join Stay Track
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Create your account to get started
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
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 text-base"
                />
                
                <button 
                    onClick={handleSignUp}
                    disabled={loading}
                    className="w-full bg-green-600 text-white p-3 rounded font-medium hover:bg-green-700 disabled:bg-green-300"
                >
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
                
                <p className="text-center text-gray-600 my-4">
                    Already have an account?
                </p>
                
                <button 
                    onClick={toLogIn}
                    className="w-full bg-gray-600 text-white p-3 rounded font-medium hover:bg-gray-700"
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default SignUpForm;