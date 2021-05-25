import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Text } from "react-native"
import RestaurantApp from "../RestaurantsScreen/RestaurantApp"
import RestaurantDetails from "./RestaurantDetails"

const Stack = createStackNavigator();

const RestaurantNavigator = () => {

    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Restaurants" component={RestaurantApp} />
            <Stack.Screen name="RestaurantsDetails" options={{
                ...TransitionPresets.SlideFromRightIOS
            }}
                component={RestaurantDetails} />
        </Stack.Navigator>
    );
}

export default RestaurantNavigator