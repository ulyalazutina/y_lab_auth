import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
    let navigate = useNavigate();
    const [userData, setUserData] = useState({})

    const loginUser = (user) => {
        setUserData(user)
        navigate('/');
    }

    return (
        <UserContext.Provider value={{ userData, loginUser }}>
            {children}
        </UserContext.Provider>
    )
}
