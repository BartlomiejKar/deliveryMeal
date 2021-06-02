import React from 'react';
import { View, Text } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();




const Login = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={() => (
                <View>
                    <Text>zaloguj</Text>
                </View>
            )} />
            <Stack.Screen name="Restaurants" component={() => (
                <View>
                    <Text>REstauracjae</Text>
                </View>
            )} />
        </Stack.Navigator>
    )
}

export default Login