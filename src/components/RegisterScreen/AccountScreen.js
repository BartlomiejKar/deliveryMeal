import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen';
import Login from './Login';

const Stack = createStackNavigator();

const AccountScreen = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default AccountScreen