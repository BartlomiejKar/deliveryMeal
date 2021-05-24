import React, { useContext, useState } from 'react';
import styled from "styled-components/native";
import { View, FlatList } from "react-native"
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

const RestaurantApp = () => {
    const { isLoading, error, restaurants, restaurantsNames } = useContext(RestaurantContext)

    return (
        <>
            <SafeAreaComponent>
                <SearchBar />
                <ViewList >
                    {isLoading ? <Spinner /> :
                        <FlatList
                            data={restaurantsNames ? restaurantsNames : restaurant}
                            renderItem={({ item }) => {
                                return (
                                    <RestaurantListCard restaurant={item} />
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