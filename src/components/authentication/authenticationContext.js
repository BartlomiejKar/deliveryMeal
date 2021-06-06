import React, { useState, createContext } from 'react';
import { LoginRequest, RegisterRequest } from "./authentication"
import firebase from "../../firebase"

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    })

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

    const onLogout = () => {
        firebase.auth().signOut().then(() => {
            setUser(null)
        }).catch((error) => {
            setError(error)
        });
    }
    return (

        < AuthenticationContext.Provider
            value={{
                isAuthenticated: user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}
        >
            { children}
        </AuthenticationContext.Provider >
    )
}

export default AuthenticationContextProvider