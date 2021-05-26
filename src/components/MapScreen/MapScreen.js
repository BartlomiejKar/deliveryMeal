import React, { useContext } from 'react';
import SafeAreaComponent from "../SafeArea/SafeArea";
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, Text } from "react-native"
import { RestaurantContext } from '../../services/Restaurants/RestaurantContext';

const MapScreen = () => {
    const { restaurants } = useContext(RestaurantContext)
    return (
        <SafeAreaComponent>
            <View  >
                <MapView
                    initialRegion={{
                        latitude: 51.219448,
                        longitude: 4.402464,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.02,
                    }}
                    style={{ height: "100%" }}>
                    {restaurants.map(el => {
                        return (
                            <Marker
                                key={el.name}
                                title={el.name}
                                coordinate={{
                                    latitude: el.geometry.location.lat,
                                    longitude: el.geometry.location.lng
                                }}

                            >
                                <Callout>
                                    <Text>{el.name} <Text style={{ color: "blue" }}>Rating:</Text> {el.rating}</Text>
                                </Callout>
                            </Marker>
                        )
                    })}
                </MapView>
            </View>
        </SafeAreaComponent>
    )
}
export default MapScreen