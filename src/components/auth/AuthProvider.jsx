import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase'

const AuthContext = createContext()
const useAuth = () => {
    const Context = useContext(AuthContext)
    if(!Context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return Context
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("onauthstatechanged triggered", user)
            setUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])

    return(
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthProvider, useAuth}