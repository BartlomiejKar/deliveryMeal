import React, { useState, createContext, useMemo, useEffect } from 'react';
import { RestaurantService, ResultTransform } from "./RestaurantService";

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRestaurant = () => {
        setIsLoading(true)
        setTimeout(() => {
            RestaurantService()
                .then(ResultTransform)
                .then((results) => {
                    setRestaurants(results)
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err)
                })
        }, 2000)
    }

    useEffect(() => {
        getRestaurant()
    }, [])

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >{children}
        </RestaurantContext.Provider>
    )
}