import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/components/ThemeProvider/theme/index";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import RestaurantApp from './src/components/RestaurantsScreen/RestaurantApp';


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
      <RestaurantApp />
    </ThemeProvider>
  );
}




