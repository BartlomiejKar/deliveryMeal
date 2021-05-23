import React from 'react';
import styled from "styled-components/native"
import { View, FlatList } from "react-native"
import RestaurantListCard from '../RestaurantList/RestaurantListCard';
import SafeAreaComponent from "../SafeArea/SafeArea"

import SearchBar from "../searchBar/SearchBar"


const ViewList = styled(View)
    `
flex:1;
background-color: white;
padding:10px
`

const RestaurantApp = () => {
    return (
        <>
            <SafeAreaComponent>
                <SearchBar />
                <ViewList >
                    <FlatList
                        data={[
                            { name: 1 },
                            { name: 2 },
                            { name: 3 },
                            { name: 4 },
                            { name: 5 },
                            { name: 6 },
                            { name: 7 },
                            { name: 8 },
                            { name: 9 },
                            { name: 10 },
                            { name: 11 },
                            { name: 12 },
                            { name: 13 },
                            { name: 14 },
                        ]}
                        renderItem={() => <RestaurantListCard />}
                        keyExtractor={item => item.name}
                    />
                </ViewList>
            </SafeAreaComponent>
        </>
    );
}





export default RestaurantApp;