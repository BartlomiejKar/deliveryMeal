import React, { useState, useEffect } from 'react';
import fireabse from "./src/firebase"
import AuthenticationContextProvider from "./src/components/authentication/authenticationContext"
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/components/ThemeProvider/theme/index";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantContextProvider } from "./src/services/Restaurants/RestaurantContext";
import { LocationContextProvider } from "./src/services/Location/LocationContext"
import NavContainer from "./src/components/Navigation/NavContainer"





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


  return (
    <ThemeProvider theme={theme} >
      <AuthenticationContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavContainer />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}




