import { signOut } from "firebase/auth"
import auth from '../config/firebase'
const Home = () => {
    const handlelogout = async () => {
        try {
            const result = await signOut(auth)
            console.log("User logged out")
        } catch (error) {
            console.log("Error:", error)
        }
    }
    return (
        <>
            <h1>Welcome to Stay Track</h1>
            <button onClick={handlelogout}>Log Out</button>
        </>
    )
}
export default Home