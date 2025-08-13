import { useState } from "react";
import  auth  from '../../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUpForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSignUp = async () => {
        try{
         const resutl = await createUserWithEmailAndPassword(auth,email,password)
         console.log("User Created Successfully")
        //  console.log("Id:", resutl.user.uid, "\nEmail: ",resutl.user.email)
        }catch(error){
            console.log("Error: ",error)
        }
    }
    return (
        <>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSignUp}>Sign Up</button>
        </>
    )
}
export default SignUpForm;