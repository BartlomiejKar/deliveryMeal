import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>First app in react native</Text>
          <Text>abcd</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    fontWeight: "bold",
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },

});
