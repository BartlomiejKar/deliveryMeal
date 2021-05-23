import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { View } from "react-native"

const Spinner = () => {
    return (
        <View style={{ position: "absolute", left: "50%", top: "50%", marginLeft: "-3%" }}>
            < ActivityIndicator size="large" animating={true} color={Colors.orange800} />
        </View>
    )
}

export default Spinner;