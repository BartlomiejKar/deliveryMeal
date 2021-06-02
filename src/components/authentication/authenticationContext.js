import React, { useState, createContext } from 'react';
import LoginRequest from "./authentication"

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin = (email, password) => {
        setIsLoading(true)
        LoginRequest(email, password).then((user) => {
            setUser(user)
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            setError(error)
        })
    }
    return (

        < AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin
            }}
        >
            { children}
        </AuthenticationContext.Provider >
    )
}

export default AuthenticationContextProvider