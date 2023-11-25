import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext()

const UserProviader = ({children}) => {
    const [ user, setUser ] = useState(null)

    useEffect(()=>{
        console.log("useEffect en acción")
    },[])

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProviader

export const useUserContext = ()=> useContext(UserContext)
