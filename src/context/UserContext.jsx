import { createContext, useContext, useEffect, useState } from "react";

// Pertenece a configuración de firebase
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/firebase";

export const UserContext = createContext()

const UserProviader = ({children}) => {
    const [ user, setUser ] = useState(false)

    useEffect(()=>{
        console.log("useEffect")
        const unsuscribe = onAuthStateChanged(auth, (user)=>{
            console.log(user)
            setUser(user)
        })
        return unsuscribe
    },[])

    if(user === false) return <p>Loading app...</p>

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProviader

export const useUserContext = ()=> useContext(UserContext)
