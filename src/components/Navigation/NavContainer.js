import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from "./Navigation"
import { AuthenticationContext } from '../authentication/authenticationContext';
import Login from "../Login/Login"



const NavContainer = () => {
    const { isAuthenticated } = useContext(AuthenticationContext)
    return (
        <NavigationContainer>
            {isAuthenticated ? <Navigation /> : <Login />}
        </NavigationContainer>
    )
}

export default NavContainer