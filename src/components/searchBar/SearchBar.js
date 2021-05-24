import React, { useContext, useState } from 'react';
import styled from "styled-components/native"
import fooddelivery from "../../../assets/fooddelivery.png"
import { View, Image } from "react-native"
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../services/Location/LocationContext';
import { RestaurantContext } from "../../services/Restaurants/RestaurantContext"


const SearchBarComponent = styled(Searchbar)
    `
flex: 1
`;
const SearchContainer = styled(View)
    `
display: flex;
flex-direction: row;
padding: 16px;
background-color: white
`;

const ImageComponent = styled(Image)
    `
width: 50px;
height: 50px;
border-radius: 5px;
margin-right: 15;
`;



const SearchBar = () => {
    const { isLoading, error, restaurantByName } = useContext(RestaurantContext)

    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = query => {
        setSearchQuery(query)
        restaurantByName(searchQuery)

    };


    return (
        <SearchContainer>
            <ImageComponent
                source={fooddelivery}
            />
            <SearchBarComponent
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </SearchContainer>

    )
}




export default SearchBar;