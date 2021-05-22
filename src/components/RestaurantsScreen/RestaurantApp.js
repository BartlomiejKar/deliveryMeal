import React from 'react';

import { SafeAreaView, View, StyleSheet, StatusBar, Text } from "react-native"
import RestaurantListCard from '../RestaurantList/RestaurantListCard';

import SearchBar from "../searchBar/SearchBar"

const RestaurantApp = () => {
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <SearchBar />
                <View style={styles.container}>
                    <RestaurantListCard />
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
    },

});




export default RestaurantApp;