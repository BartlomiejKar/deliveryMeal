import React, { Children, createContext, useEffect, useState } from 'react';

import { LocationService, TransformLocationService } from "./LocationService"


export const LocationContext = createContext();


export const LocationContextProvider = ({ children }) => {
    const [searchWords, setSearchWords] = useState("Antwerp")
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyWords) => {
        setIsLoading(true);
        setSearchWords(searchKeyWords)
        if (!searchKeyWords.length) {
            return;
        }
        LocationService(searchKeyWords.toLowerCase())
            .then(TransformLocationService)
            .then((result) => {
                setIsLoading(false);
                setLocation(result)
            }).catch(err => {
                setError(err)
            })
    }

    useEffect(() => {
        onSearch(searchWords)
    }, [])
    return (
        <LocationContext.Provider
            value={{
                searchWords,
                location,
                isLoading,
                error,
                search: onSearch

            }}
        >
            {children}
        </LocationContext.Provider>
    )
}