import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/components/ThemeProvider/theme/index";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantContextProvider } from "./src/services/Restaurants/RestaurantContext";
import { LocationContextProvider } from "./src/services/Location/LocationContext"
import Navigation from "./src/components/Navigation/Navigation"




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
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}




