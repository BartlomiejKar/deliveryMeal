import React from 'react';
import { View, Text, StyleSheet } from "react-native"

const SearchBar = () => {
    return (
        <View>
            <Text style={styles.searchBar}>Search</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "green",
        padding: 16
    }
})


export default SearchBar;