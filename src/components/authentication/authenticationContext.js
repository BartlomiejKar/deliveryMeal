import React, { useState, createContext, useEffect } from 'react';
import { LoginRequest } from "./authentication"
// import firebase from "../../firebase"

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    console.log(user)
    // useEffect(() => {
    //     firebase.auth().signInWithEmailAndPassword("user@o2.pl", "123456").then(user => {
    //         setUser(user)
    //     })
    // }, [])
    const onLogin = (email, password) => {
        setIsLoading(true)
        // LoginRequest(email, password)
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
    return (

        < AuthenticationContext.Provider
            value={{
                isAuthenticated: user,
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