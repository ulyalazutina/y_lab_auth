import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
    const [userData, setUserData] = useState({})

    const loginUser = (user) => {
        setUserData(user)
    }

    return (
        <UserContext.Provider value={{ userData, loginUser }}>
            {children}
        </UserContext.Provider>
    )
}
