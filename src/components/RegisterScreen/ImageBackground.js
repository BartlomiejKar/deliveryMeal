import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../../../assets/foodbackground.jpg"


const Image = ({ children }) => (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            {children}
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});

export default Image;