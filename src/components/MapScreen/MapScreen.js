import React from 'react';
import SafeAreaComponent from "../SafeArea/SafeArea";
import MapView from 'react-native-maps';
import { View } from "react-native"

const MapScreen = () => {
    return (
        <SafeAreaComponent>
            <View >
                <MapView />
            </View>
        </SafeAreaComponent>
    )
}
export default MapScreen