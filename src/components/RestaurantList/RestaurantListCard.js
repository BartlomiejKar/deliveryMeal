import React from 'react';
import styled from "styled-components/native"
import { Card, Title } from "react-native-paper"
import burger from "../../../assets/burgers.jpg"


const CardComponent = styled(Card)
    `
padding: 10px;
border-radius: 5px;
margin: 6px
`;

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
        <CardComponent>
            <Card.Cover source={photo} />
            <Card.Content>
                <Title>{name}</Title>
            </Card.Content>
        </CardComponent>
    )
}





export default RestaurantListCard;