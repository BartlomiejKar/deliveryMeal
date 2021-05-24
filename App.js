import React from 'react';
import { Text } from "react-native";
import SafeAreaComponent from "./src/components/SafeArea/SafeArea";
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/components/ThemeProvider/theme/index";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import RestaurantApp from './src/components/RestaurantsScreen/RestaurantApp';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantContextProvider } from "./src/services/Restaurants/RestaurantContext";
import { LocationContextProvider } from "./src/services/Location/LocationContext"


const Setting = () => {
  return (
    <SafeAreaComponent>
      <Text>Setting</Text>
    </SafeAreaComponent>
  )
}
const Map = () => {
  return (
    <SafeAreaComponent>
      <Text>Map</Text>
    </SafeAreaComponent>
  )
}

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  const Tab = createBottomTabNavigator();
  return (
    <ThemeProvider theme={theme} >
      <LocationContextProvider>
        <RestaurantContextProvider>
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
              <Tab.Screen name="Home" component={RestaurantApp} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}




