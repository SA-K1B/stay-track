import { useState } from "react";
import  auth  from '../../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const handleSignUp = async () => {
        try{
         const resutl = await createUserWithEmailAndPassword(auth,email,password)
         console.log("User Created Successfully")
        //  console.log("Id:", resutl.user.uid, "\nEmail: ",resutl.user.email)
        }catch(error){
            console.log("Error: ",error)
        }
    }
    const toLogIn = () => {
        navigate("/")
    }
    return (
        <>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSignUp}>Sign Up</button>
        <p>Already have an account</p>
        <button onClick={toLogIn}>Log In</button>
        </>
    )
}
export default SignUpForm;