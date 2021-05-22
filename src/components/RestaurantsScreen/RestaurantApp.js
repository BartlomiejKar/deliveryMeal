import React from 'react';
import styled from "styled-components/native"
import { SafeAreaView, View, StatusBar } from "react-native"
import RestaurantListCard from '../RestaurantList/RestaurantListCard';

import SearchBar from "../searchBar/SearchBar"

const SafeAreaComponent = styled(SafeAreaView)
    `
flex: 1;
background-color: #f8961e;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`

const ViewList = styled(View)
    `
flex:1;
background-color: white
`

const RestaurantApp = () => {
    return (
        <>
            <SafeAreaComponent>
                <SearchBar />
                <ViewList >
                    <RestaurantListCard />
                </ViewList>
            </SafeAreaComponent>
        </>
    );
}





export default RestaurantApp;