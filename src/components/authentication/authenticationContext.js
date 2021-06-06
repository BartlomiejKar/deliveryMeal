import React, { useState, createContext, useEffect } from 'react';
import { LoginRequest, RegisterRequest } from "./authentication"
// import firebase from "../../firebase"

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)


    const onLogin = (email, password) => {
        setIsLoading(true)
        LoginRequest(email, password)
            .then((u) => {
                console.log(u)
                setUser(u)
                setIsLoading(false)
            }).catch((error) => {
                console.log(error.toString())
                setError(error.toString())
                setIsLoading(false)
            })
    }

    const onRegister = (email, password, repeatPassword) => {
        if (password !== repeatPassword) {
            setError("invalid password")
            return
        }
        setIsLoading(true)
        RegisterRequest(email, password, repeatPassword)
            .then((u) => {
                console.log(u)
                setUser(u)
                setIsLoading(false)
            }).catch((error) => {
                console.log(error.toString())
                setError(error.toString())
                setIsLoading(false)
            })
    }
    return (

        < AuthenticationContext.Provider
            value={{
                isAuthenticated: user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister
            }}
        >
            { children}
        </AuthenticationContext.Provider >
    )
}

export default AuthenticationContextProvider