import React, { useState } from 'react';
import fooddelivery from "../../../assets/fooddelivery.png"
import { View, StyleSheet, Image } from "react-native"
import { Searchbar } from 'react-native-paper';
import { flushSync } from 'react-dom';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.searchBarContainer}>
            <Image
                style={styles.image}
                source={fooddelivery}
            />
            <Searchbar
                style={styles.searchBar}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    searchBarContainer: {
        display: 'flex',
        flexDirection: "row",
        padding: 16,
        backgroundColor: "white"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15,
        resizeMode: "contain"
    },
    searchBar: {
        flex: 1
    }
})


export default SearchBar;