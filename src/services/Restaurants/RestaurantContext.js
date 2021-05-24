import React, { useState, createContext, useMemo, useEffect } from 'react';
import { RestaurantService, ResultTransform } from "./RestaurantService";

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
    const [restaurantsNames, setRestaurantsNames] = useState([])
    const [searchWords, setSearchWords] = useState("")
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const restaurantsMap = restaurants.map(el => {
        const { name, vicinity, rating, photos, placeId } = el
        return { name, vicinity, rating, photos, placeId }
    })
    console.log(restaurantsMap)
    const getRestaurant = () => {
        setIsLoading(true)
        setTimeout(() => {
            RestaurantService()
                .then(ResultTransform)
                .then((results) => {
                    setIsLoading(false)
                    setRestaurants(results)
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err)
                })
        }, 2000)
    }

    const getRestaurantByName = (searchWords) => {
        setSearchWords(searchWords);
        const regex = new RegExp(searchWords, "gi");
        const filterRestaurants = restaurantsMap.reduce((acc, restaurant) => {
            if ((restaurant && restaurant.name.match(regex))) {
                acc.push(restaurant)
            }
            return acc
        }, [])
        setRestaurantsNames(filterRestaurants)
    }

    useEffect(() => {
        getRestaurant();
    }, [])

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
                restaurantsNames,
                restaurantByName: getRestaurantByName
            }}
        >{children}
        </RestaurantContext.Provider>
    )
}