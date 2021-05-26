import React from 'react';
import SafeAreaComponent from "../SafeArea/SafeArea";
import { Text, } from "react-native";
import RestaurantNavigator from "./RestaurantNavigator";
import MapScreen from "../MapScreen/MapScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Setting = () => {
    return (
        <SafeAreaComponent>
            <Text>Setting</Text>
        </SafeAreaComponent>
    )
}


const Navigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-restaurant'
                                : 'ios-restaurant-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                        } else if (route.name === "Map") {
                            iconName = focused ? 'ios-map' : 'ios-map-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={RestaurantNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;