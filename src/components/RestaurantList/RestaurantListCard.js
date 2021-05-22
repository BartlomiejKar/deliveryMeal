import React from 'react';
import { Card, Title } from "react-native-paper"
import { StyleSheet } from "react-native"
import burger from "../../../assets/burgers.jpg"


const RestaurantListCard = ({ Restaurant = {} }) => {
    const {
        name = "Some restaurant",
        isOpen = true,
        icon,
        photo = burger,
        adress = "random 1100",
        rating = 4,
    } = Restaurant

    return (
        <Card style={styles.card}>
            <Card.Cover source={photo} />
            <Card.Content>
                <Title>{name}</Title>
            </Card.Content>
        </Card>
    )
}


const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 5,
        margin: 6
    }
})


export default RestaurantListCard;