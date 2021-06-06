import React, { useContext } from 'react';
import styled from "styled-components/native";
import { View, FlatList, Pressable, TouchableOpacity } from "react-native"
import RestaurantListCard from '../RestaurantList/RestaurantListCard';
import SafeAreaComponent from "../SafeArea/SafeArea";
import { RestaurantContext } from "../../services/Restaurants/RestaurantContext";
import Spinner from "../Spinner/Spinner"


import SearchBar from "../searchBar/SearchBar"


const ViewList = styled(View)
    `
flex:1;
background-color: white;
padding:10px
`

const RestaurantApp = ({ navigation }) => {
    const { isLoading, restaurants, restaurantsNames } = useContext(RestaurantContext)
    return (
        <>
            <SafeAreaComponent>
                <SearchBar />
                <ViewList >
                    {isLoading ? <Spinner /> :
                        <FlatList
                            data={(restaurantsNames && (restaurantsNames.length >= 1)) ? restaurantsNames : restaurants}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("RestaurantsDetails", { restaurant: item })}
                                    >
                                        <RestaurantListCard restaurant={item} />
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={item => item.name}
                        />}
                </ViewList>
            </SafeAreaComponent>
        </>
    );
}





export default RestaurantApp;