import { useState } from "react";
import  auth  from '../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
const LogIn = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleLogIn = async () => {
        try{
         const resutl = await signInWithEmailAndPassword(auth,email,password)
         console.log("User Logged In Successfully")
         console.log("Id:", resutl.user.uid, "\nEmail: ",resutl.user.email)
        }catch(error){
            console.log("Error: ",error)
        }
    }
    return (
        <>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogIn}>Log In</button>
        </>
    )
}
export default LogIn;