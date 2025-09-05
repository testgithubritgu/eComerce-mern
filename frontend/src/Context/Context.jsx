import { createContext, useState } from "react";

export const authContext = createContext()

const CreatAuthContext = ({children}) => {
    const getUser = localStorage.getItem("user")
    const userData = getUser && JSON.parse(getUser);
    const [user ,setuser]= useState(userData? userData:false)
    
  
    return (
        <authContext.Provider value={{ user,setuser }}>
            {children}
        </authContext.Provider>
    )
}

export default CreatAuthContext