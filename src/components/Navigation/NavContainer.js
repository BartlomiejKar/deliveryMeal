import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from "./Navigation"
import AccountScreen from "../RegisterScreen/AccountScreen"
import { AuthenticationContext } from '../authentication/authenticationContext';




const NavContainer = () => {
    const { isAuthenticated } = useContext(AuthenticationContext)
    return (
        <NavigationContainer>
            {   isAuthenticated ? <Navigation /> : <AccountScreen />}
        </NavigationContainer>
    )
}

export default NavContainer