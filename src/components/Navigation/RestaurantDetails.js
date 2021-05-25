import React from 'react';
import RestaurantListCard from "../RestaurantList/RestaurantListCard"
import SafeAreaComponent from "../SafeArea/SafeArea"


const RestaurantDetails = ({ route }) => {
    const { restaurant } = route.params
    return (
        <SafeAreaComponent>
            <RestaurantListCard restaurant={restaurant} />
        </SafeAreaComponent>
    )
}

export default RestaurantDetails