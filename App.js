import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import SearchBar from "./src/components/searchBar/SearchBar"

export default function App() {


  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <SearchBar />
        <View style={styles.container}>
          <Text>First app in react native</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
    // status bar for android
    marginTop: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    fontWeight: "bold",
    backgroundColor: "orange",
    alignItems: 'center',
    justifyContent: 'center',
  },

});
