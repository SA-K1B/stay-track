import { useState } from "react";
import  auth  from '../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUpForm from "./SignUpForm";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogIn = async () => {
        try{
         const resutl = await signInWithEmailAndPassword(auth,email,password)
         console.log("User Logged In Successfully")
         console.log("Id:", resutl.user.uid, "\nEmail: ",resutl.user.email)
         navigate("/")
        }catch(error){
            console.log("Error: ",error)
        }
    }
    const toSignUp = () => {
        navigate("/signup")
    }
    return (
        <>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogIn}>Log In</button>
        <p>Do not have an account?</p>
        <button onClick={toSignUp}>Sign Up</button>
        </>
    )
}
export default LogIn;