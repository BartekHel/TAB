import { useState, createContext } from "react";

const userContext = createContext({});

export const UserProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [userId, setUserId] = useState(0);
    const [role, setRole] = useState('');

    return(
        <userContext.Provider value={{logged,setLogged,userId, setUserId, role, setRole}}>
            {children}
        </userContext.Provider>
    )
}

export default userContext;